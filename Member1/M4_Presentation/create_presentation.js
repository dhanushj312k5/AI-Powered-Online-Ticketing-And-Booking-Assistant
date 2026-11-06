
const pptxgen = require("pptxgenjs");

const pptx = new pptxgen();

pptx.layout = "LAYOUT_WIDE";
pptx.author = "Hackpack";
pptx.subject = "AI-Powered Online Ticketing and Booking Assistant";
pptx.title = "AI-Powered Online Ticketing and Booking Assistant";
pptx.company = "Hackpack";
pptx.lang = "en-IN";

pptx.theme = {
  headFontFace: "Aptos Display",
  bodyFontFace: "Aptos",
  lang: "en-IN"
};

pptx.defineSlideMaster({
  title: "MASTER",
  background: { color: "0B1220" },
  objects: [
    {
      line: {
        x: 0.5, y: 0.65, w: 12.3, h: 0,
        line: { color: "334155", width: 1 }
      }
    },
    {
      text: {
        text: "HACKPACK | AI TICKETING ASSISTANT",
        options: {
          x: 0.55, y: 7.12, w: 8, h: 0.2,
          fontFace: "Aptos",
          fontSize: 9,
          color: "94A3B8"
        }
      }
    }
  ],
  slideNumber: {
    x: 12.25, y: 7.1,
    color: "94A3B8",
    fontSize: 9
  }
});

function addTitle(slide, title, subtitle = "") {
  slide.addText(title, {
    x: 0.65, y: 0.9, w: 12, h: 0.55,
    fontFace: "Aptos Display",
    fontSize: 27,
    bold: true,
    color: "60A5FA",
    margin: 0
  });

  if (subtitle) {
    slide.addText(subtitle, {
      x: 0.68, y: 1.55, w: 11.7, h: 0.45,
      fontSize: 13,
      color: "CBD5E1",
      margin: 0
    });
  }
}

function addBulletSlide(title, subtitle, bullets) {
  const slide = pptx.addSlide("MASTER");

  addTitle(slide, title, subtitle);

  const text = bullets.map(item => ({
    text: item,
    options: {
      bullet: { indent: 18 },
      hanging: 4,
      breakLine: true
    }
  }));

  slide.addText(text, {
    x: 1.0, y: 2.25, w: 11.2, h: 4.3,
    fontFace: "Aptos",
    fontSize: 19,
    color: "F1F5F9",
    paraSpaceAfterPt: 20,
    valign: "mid",
    margin: 0.1,
    breakLine: false
  });

  return slide;
}

// SLIDE 1: TITLE
{
  const slide = pptx.addSlide();
  slide.background = { color: "0B1220" };

  slide.addText("HACKPACK", {
    x: 0.8, y: 1.0, w: 11.7, h: 0.6,
    fontSize: 22, bold: true,
    color: "60A5FA", align: "center"
  });

  slide.addText(
    "AI-Powered Online Ticketing\nand Booking Assistant",
    {
      x: 1.0, y: 2.0, w: 11.3, h: 1.8,
      fontFace: "Aptos Display",
      fontSize: 32,
      bold: true,
      color: "FFFFFF",
      align: "center",
      valign: "mid",
      breakLine: false
    }
  );

  slide.addText(
    "A smarter and simpler conversational ticket booking experience",
    {
      x: 1.1, y: 4.2, w: 11.1, h: 0.65,
      fontSize: 17,
      color: "CBD5E1",
      align: "center"
    }
  );

  slide.addText(
    "Presented by: Member 1 and Project Team",
    {
      x: 1, y: 5.6, w: 11.3, h: 0.4,
      fontSize: 15,
      color: "60A5FA",
      align: "center"
    }
  );
}

// SLIDE 2: PROBLEM STATEMENT
addBulletSlide(
  "The Problem",
  "Challenges faced by users in traditional ticket booking",
  [
    "Complicated and time-consuming booking procedures",
    "Difficulty finding suitable tickets and events",
    "Confusion during seat selection",
    "Unclear pricing, discounts and additional charges",
    "Payment failures and booking uncertainty",
    "Limited support during poor internet connectivity"
  ]
);

// SLIDE 3: PROPOSED SOLUTION
addBulletSlide(
  "Our Proposed Solution",
  "An AI-powered conversational ticket booking assistant",
  [
    "Understand booking requests in natural language",
    "Help users discover available tickets",
    "Guide users through seat selection",
    "Calculate ticket prices, taxes and discounts",
    "Support the checkout process",
    "Provide booking confirmation and QR tickets"
  ]
);

// SLIDE 4: KEY FEATURES
addBulletSlide(
  "Key Features",
  "Main capabilities of the proposed booking system",
  [
    "Conversational ticket booking",
    "Ticket and event discovery",
    "Seat selection and availability checking",
    "Ticket pricing and promotional discounts",
    "Tax calculation and checkout",
    "Simulated payment through payment sandbox",
    "Booking confirmation and QR ticket generation"
  ]
);

// SLIDE 5: AI AND OFFLINE
addBulletSlide(
  "AI and Offline Capabilities",
  "Intelligent assistance and connectivity resilience",
  [
    "AI: Natural-language understanding of booking requests",
    "AI: Conversational guidance during booking",
    "AI: Multilingual support, if implemented",
    "Offline: Access to supported cached information",
    "Offline: Local interface during connectivity interruptions",
    "Offline: Synchronization after reconnection, if implemented",
    "Clearly distinguish tested features from planned features"
  ]
);

// SLIDE 6: SYSTEM ARCHITECTURE
{
  const slide = pptx.addSlide("MASTER");

  addTitle(
    slide,
    "System Architecture",
    "Major components of the ticket booking assistant"
  );

  const boxes = [
    { text: "USER\nINTERFACE", x: 0.8, y: 2.25, w: 2.6 },
    { text: "BACKEND\nAPPLICATION", x: 3.8, y: 2.25, w: 2.6 },
    { text: "AI\nCONVERSATION", x: 6.8, y: 2.25, w: 2.6 },
    { text: "DATABASE", x: 9.8, y: 2.25, w: 2.6 }
  ];

  boxes.forEach(box => {
    slide.addShape(pptx.ShapeType.roundRect, {
      x: box.x, y: box.y, w: box.w, h: 0.95,
      rectRadius: 0.08,
      fill: { color: "1E3A5F" },
      line: { color: "60A5FA", width: 1.5 }
    });

    slide.addText(box.text, {
      x: box.x + 0.1, y: box.y + 0.15,
      w: box.w - 0.2, h: 0.65,
      fontSize: 15, bold: true,
      color: "FFFFFF", align: "center",
      valign: "mid"
    });
  });

  slide.addText("↓", {
    x: 5.7, y: 3.35, w: 1.5, h: 0.5,
    fontSize: 28, color: "60A5FA",
    align: "center"
  });

  const services = [
    "Ticket Search",
    "Seat Selection",
    "Pricing Engine",
    "Payment Sandbox",
    "QR Ticket Generation"
  ];

  services.forEach((service, i) => {
    const x = 0.65 + i * 2.5;

    slide.addShape(pptx.ShapeType.roundRect, {
      x, y: 4.1, w: 2.2, h: 1.15,
      fill: { color: "172554" },
      line: { color: "38BDF8", width: 1 }
    });

    slide.addText(service, {
      x: x + 0.08, y: 4.35,
      w: 2.04, h: 0.6,
      fontSize: 13, color: "FFFFFF",
      align: "center", valign: "mid"
    });
  });

  slide.addText(
    "Booking confirmation and ticket details are returned to the user.",
    {
      x: 1.0, y: 5.8, w: 11.3, h: 0.5,
      fontSize: 16, color: "CBD5E1",
      align: "center"
    }
  );
}

// SLIDE 7: TECHNOLOGY STACK
addBulletSlide(
  "Technology Stack",
  "Replace placeholders with the actual technologies used by your team",
  [
    "Frontend: [Enter actual frontend technology]",
    "Backend: [Enter actual backend technology]",
    "Programming Language: [Enter actual language]",
    "Database: [Enter actual database]",
    "AI Model: [Enter actual AI model]",
    "Version Control: Git and GitHub",
    "Development Environment: Visual Studio Code"
  ]
);

// SLIDE 8: DEMO AND CONCLUSION
addBulletSlide(
  "Live Demo and Conclusion",
  "Demonstrating the complete ticket booking journey",
  [
    "Launch the booking assistant",
    "Enter a natural-language booking request",
    "Search available tickets and select seats",
    "Display ticket price, discounts and taxes",
    "Complete the simulated payment",
    "Display booking ID and QR ticket",
    "Our goal: simpler, faster and more accessible booking"
  ]
);

// GENERATE POWERPOINT
pptx.writeFile({
  fileName: "08_Final_Presentation.pptx"
})
.then(() => {
  console.log("SUCCESS: PowerPoint created!");
  console.log("File: 08_Final_Presentation.pptx");
})
.catch(error => {
  console.error("PowerPoint generation failed:", error);
});
