const fs = require('fs');
const path = require('path');

function htmlToJsx(html) {
    let jsx = html;
    
    // Convert class to className
    jsx = jsx.replace(/class=/g, 'className=');
    // Convert for to htmlFor
    jsx = jsx.replace(/for=/g, 'htmlFor=');
    
    // Close self-closing tags (img, input, br, hr)
    jsx = jsx.replace(/<img(.*?)>/g, (match, attrs) => {
        if(match.endsWith('/>')) return match;
        return `<img${attrs} />`;
    });
    jsx = jsx.replace(/<input(.*?)>/g, (match, attrs) => {
        if(match.endsWith('/>')) return match;
        return `<input${attrs} />`;
    });
    jsx = jsx.replace(/<br(.*?)>/g, (match, attrs) => {
        if(match.endsWith('/>')) return match;
        return `<br${attrs} />`;
    });
    jsx = jsx.replace(/<hr(.*?)>/g, (match, attrs) => {
        if(match.endsWith('/>')) return match;
        return `<hr${attrs} />`;
    });
    
    // Convert inline styles (simplistic)
    jsx = jsx.replace(/style="([^"]*)"/g, (match, styles) => {
        const styleObj = styles.split(';').reduce((acc, style) => {
            if(!style.trim()) return acc;
            const [key, value] = style.split(':');
            const camelKey = key.trim().replace(/-([a-z])/g, g => g[1].toUpperCase());
            acc.push(`${camelKey}: '${value.trim().replace(/'/g, "\\'")}'`);
            return acc;
        }, []).join(', ');
        return `style={{ ${styleObj} }}`;
    });

    return jsx;
}

function processFile(inputFile, outputFile, isHome) {
    try {
        const content = fs.readFileSync(inputFile, 'utf-8');
        
        // Extract body content (excluding nav, footer, script, and chatbot widget)
        let bodyContent = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i)?.[1] || '';
        
        // Remove Nav
        bodyContent = bodyContent.replace(/<nav[\s\S]*?<\/nav>/i, '');
        // Remove Footer
        bodyContent = bodyContent.replace(/<footer[\s\S]*?<\/footer>/i, '');
        // Remove Scripts
        bodyContent = bodyContent.replace(/<script[\s\S]*?<\/script>/ig, '');
        // Remove Chatbot widget
        bodyContent = bodyContent.replace(/<div className="chatbot-widget"[\s\S]*?<\/div>\s*<\/div>/i, '');
        bodyContent = bodyContent.replace(/<div class="chatbot-widget"[\s\S]*?<\/div>\s*<\/div>/i, '');
        // Remove Alert Overlay
        bodyContent = bodyContent.replace(/<div class="custom-alert-overlay"[\s\S]*?<\/div>\s*<\/div>/i, '');

        let jsxContent = htmlToJsx(bodyContent);

        const template = `
export default function Page() {
    return (
        <main>
            ${jsxContent}
        </main>
    );
}
`;
        const outDir = path.dirname(outputFile);
        if(!fs.existsSync(outDir)) {
            fs.mkdirSync(outDir, {recursive: true});
        }
        fs.writeFileSync(outputFile, template);
        console.log(`Processed ${inputFile} -> ${outputFile}`);
    } catch (e) {
        console.error(`Error processing ${inputFile}:`, e.message);
    }
}

const basePath = path.join(__dirname, '..');
processFile(path.join(basePath, 'index.html'), path.join(__dirname, 'src', 'app', 'page.tsx'), true);
processFile(path.join(basePath, 'about.html'), path.join(__dirname, 'src', 'app', 'about', 'page.tsx'));
processFile(path.join(basePath, 'districts.html'), path.join(__dirname, 'src', 'app', 'districts', 'page.tsx'));
processFile(path.join(basePath, 'responsibilities.html'), path.join(__dirname, 'src', 'app', 'responsibilities', 'page.tsx'));
processFile(path.join(basePath, 'departments.html'), path.join(__dirname, 'src', 'app', 'departments', 'page.tsx'));
processFile(path.join(basePath, 'contact.html'), path.join(__dirname, 'src', 'app', 'contact', 'page.tsx'));
processFile(path.join(basePath, 'apply.html'), path.join(__dirname, 'src', 'app', 'apply', 'page.tsx'));
