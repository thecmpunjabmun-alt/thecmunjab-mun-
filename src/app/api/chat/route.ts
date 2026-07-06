import { NextResponse } from 'next/server';
import Groq from 'groq-sdk';

// In-memory store for rate limiting
const rateLimitMap = new Map<string, { count: number, resetTime: number }>();
const MAX_REQUESTS_PER_DAY = 5;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawMessage = body.message || "";
    const fingerprint = body.fingerprint || "";
    const message = rawMessage.toLowerCase();

    // Basic IP tracking from headers
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    
    // Rate limit keys
    const ipKey = `ip_${ip}`;
    const fpKey = fingerprint ? `fp_${fingerprint}` : null;
    
    const userIpRate = rateLimitMap.get(ipKey);
    const userFpRate = fpKey ? rateLimitMap.get(fpKey) : null;
    
    // Check if either IP or Fingerprint has exceeded limits
    const hasExceededIp = userIpRate && now <= userIpRate.resetTime && userIpRate.count >= MAX_REQUESTS_PER_DAY;
    const hasExceededFp = userFpRate && now <= userFpRate.resetTime && userFpRate.count >= MAX_REQUESTS_PER_DAY;

    if (hasExceededIp || hasExceededFp) {
      // DUMB BOT LOGIC (Fallback)
      let fallbackResponse = "";

      if (message.includes("apply") || message.includes("application") || message.includes("register") || message.includes("join") || message.includes("participate")) {
        fallbackResponse = "Applications for District Coordinators are currently **CLOSED** (deadline was May 9, 2026). Participant applications are currently on hold. Please keep an eye on our social media for updates.";
      } else if (message.includes("event") || message.includes("pre launch") || message.includes("launch") || message.includes("when is")) {
        fallbackResponse = "Our exciting pre-launch event is happening on **July 10th at the Nawaz Shareef Center of Excellence**! Stay tuned to our social media for more details.";
      } else if (message.includes("department") || message.includes("departments")) {
        fallbackResponse = "CM Punjab MUN has 7 distinct departments: Central Command, Media and IT, Academic Affairs, Coordination, Outreach, HR, and Operations.";
      } else if (message.includes("coordinator") || message.includes("provincial team") || message.includes("team") || message.includes("who is")) {
        fallbackResponse = "We have dedicated District Coordinators across all 36 districts of Punjab. To see the full list of our amazing team members, please check out the **Provincial Team** page in our menu!";
      } else if (message.includes("build") || message.includes("built") || message.includes("developer") || message.includes("creator")) {
        fallbackResponse = "I don't have any info regarding that. You can contact the officials at **thecmpunjabmun@gmail.com** for such information.";
      } else if (message.includes("contact") || message.includes("email") || message.includes("whatsapp") || message.includes("phone") || message.includes("insta") || message.includes("reach")) {
        fallbackResponse = "You can contact us at **thecmpunjabmun@gmail.com** or visit the Nawaz Shareef Center of Excellence at 4 Shahrah Aiwan-e-Sanat-o-Tijarat, G.O.R. - I, Lahore. You can also reach us on WhatsApp at [+92 321 44787532](https://wa.me/9232144787532) or Instagram [@thecmpunjabmun](https://www.instagram.com/thecmpunjabmun/).";
      } else if (message.includes("benefit") || message.includes("why") || message.includes("perk") || message.includes("advantage")) {
        fallbackResponse = "Benefits of joining include Government Recognition, Skill Mastery (public speaking, diplomacy), Academic Edge, and Elite Networking.";
      } else if (message.includes("program") || message.includes("about") || message.includes("what is") || message.includes("mun") || message.includes("cm punjab")) {
        fallbackResponse = "CM Punjab MUN is Pakistan's first-ever government-sponsored youth diplomacy initiative. It's an educational simulation of the UN, featuring a Training Program and Conference.";
      } else if (message.includes("thank") || message.includes("thx") || message.includes("appreciate")) {
        fallbackResponse = "You're very welcome! If you have any other questions, feel free to ask.";
      } else if (message.includes("hi") || message.includes("hello") || message.includes("hey") || message.includes("greetings")) {
        fallbackResponse = "Hello! I am operating in basic keyword mode right now because the AI limit was reached. Please ask me about **applications**, **departments**, **our team**, **benefits**, or **contact info**.";
      } else {
        fallbackResponse = "*(Basic Mode)* I didn't quite catch that. Try asking about **applications**, **events**, **the team**, **benefits**, or **contact info**. Alternatively, you can reach a real person at thecmpunjabmun@gmail.com or on Instagram [@thecmpunjabmun].";
      }

      return NextResponse.json(
        { 
          response: fallbackResponse,
          remaining: 0
        }, 
        { status: 200 }
      );
    }
    
    // Update IP Rate Limit
    let ipCount = 1;
    let ipResetTime = now + ONE_DAY_MS;
    if (userIpRate && now <= userIpRate.resetTime) {
      ipCount = userIpRate.count + 1;
      ipResetTime = userIpRate.resetTime;
    }
    rateLimitMap.set(ipKey, { count: ipCount, resetTime: ipResetTime });

    // Update FP Rate Limit if available
    let fpCount = 1;
    let fpResetTime = now + ONE_DAY_MS;
    if (fpKey) {
      if (userFpRate && now <= userFpRate.resetTime) {
        fpCount = userFpRate.count + 1;
        fpResetTime = userFpRate.resetTime;
      }
      rateLimitMap.set(fpKey, { count: fpCount, resetTime: fpResetTime });
    }

    const maxUsed = Math.max(ipCount, fpKey ? fpCount : 0);
    const remaining = Math.max(0, MAX_REQUESTS_PER_DAY - maxUsed);

    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const groq = new Groq({ apiKey });

    const systemPrompt = `You are the official CM Punjab MUN virtual assistant. Be helpful, concise, and professional. Use the following information to answer user questions:
- CM Punjab MUN is Pakistan's first-ever government-sponsored youth diplomacy initiative. It's an educational simulation of the UN.
- Benefits: Government Recognition, Skill Mastery (public speaking, diplomacy), Academic Edge, Elite Networking.
- Departments (7): Central Command, Media and IT, Academic Affairs, Coordination, Outreach, HR, Operations.
- Applications: District Coordinators nominations are CLOSED (deadline was May 9, 2026, 700+ applications). Participant Applications are on hold.
- Program Components: 1. MUN Training Program, 2. MUN Conference.
- Upcoming Events: The Pre-Launch Event is happening on July 10th at the Nawaz Shareef Center of Excellence.
- Mission/Vision: Unlock youth potential, bridge the gap between private and government institutions, provide equal platforms.
- Eligibility/Role: District Coordinators must have strong communication skills, be residents of their district, and handle outreach, institutional coordination, logistics, and central communication. It is an honorary, voluntary role (No TA/DA).
- Coverage: All 9 divisions and 36 districts of Punjab. If asked about specific people, tell the user to check the "Provincial Team" page on the website.
- Core Values: Diplomacy, Innovation, Inclusivity, Global Awareness.
- Contact: Nawaz Shareef Center of Excellence, 4 Shahrah Aiwan-e-Sanat-o-Tijarat, G.O.R. - I, Lahore. Email: thecmpunjabmun@gmail.com. Mon-Fri 9AM-5PM.
- Development: If asked who built the site, state that you don't have any information regarding that and they should contact the officials for such information.
- IMPORTANT: If you cannot answer a question based on this information, do not make up an answer. Instead, politely tell the user to contact us on our official Instagram page or reach out to a real person at thecmpunjabmun@gmail.com.
Please format output using markdown (tables, lists, bold text) where appropriate.`;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: rawMessage }
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.5,
    });

    const botText = chatCompletion.choices[0]?.message?.content || "I am currently unable to answer. Please try again.";
    
    return NextResponse.json({ response: botText, remaining });

  } catch (error) {
    console.error("Chat API Route Error:", error);
    return NextResponse.json({ response: "An error occurred connecting to the assistant. Please try again later." });
  }
}
