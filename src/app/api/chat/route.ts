import { NextResponse } from 'next/server';

// In-memory store for rate limiting
// This works perfectly for VPS/Standard deployments and reasonably well for Serverless
const rateLimitMap = new Map<string, { count: number, resetTime: number }>();
const MAX_REQUESTS_PER_DAY = 5;
const ONE_DAY_MS = 24 * 60 * 60 * 1000;

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const rawMessage = body.message || "";
    const message = rawMessage.toLowerCase();

    // Basic IP tracking from headers
    const ip = req.headers.get('x-forwarded-for') || '127.0.0.1';
    const now = Date.now();
    
    // Rate Limiting Logic
    let count = 0;
    let resetTime = 0;
    
    const userRate = rateLimitMap.get(ip);
    if (userRate && now <= userRate.resetTime) {
      if (userRate.count >= MAX_REQUESTS_PER_DAY) {
        
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
      count = userRate.count + 1;
      resetTime = userRate.resetTime;
    } else {
      count = 1;
      resetTime = now + ONE_DAY_MS;
    }
    
    rateLimitMap.set(ip, { count, resetTime });
    const remaining = MAX_REQUESTS_PER_DAY - count;

    const apiKey = process.env.OPENAI_API_KEY;

    if (!apiKey) {
      return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          {
            role: 'system',
            content: `You are the official CM Punjab MUN virtual assistant. Be helpful, concise, and professional. Use the following information to answer user questions:
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
Please format output using markdown (tables, lists, bold text) where appropriate.`
          },
          {
            role: 'user',
            content: message
          }
        ]
      })
    });

    if (!response.ok) {
      console.error(await response.text());
      return NextResponse.json({ response: "I'm currently experiencing high traffic. Please wait a moment and try again." });
    }

    const data = await response.json();
    
    if (data.choices && data.choices.length > 0) {
      const botText = data.choices[0].message.content;
      return NextResponse.json({ response: botText, remaining });
    }
    
    return NextResponse.json({ response: "I'm having trouble processing that right now. Please try again later." });

  } catch (error) {
    console.error("Chat API Route Error:", error);
    return NextResponse.json({ response: "An error occurred connecting to the assistant. Please try again later." });
  }
}
