// Iron Lady Chatbot JavaScript - Updated Version with Mission/Aim Responses
// Modified to provide direct answers to typed queries including aim/mission questions

class IronLadyChatbot {
    constructor() {
        this.chatMessages = document.getElementById('chatMessages');
        this.messageInput = document.getElementById('messageInput');
        this.sendBtn = document.getElementById('sendBtn');
        this.clearChatBtn = document.getElementById('clearChatBtn');
        this.typingIndicator = document.getElementById('typingIndicator');
        this.faqButtons = document.querySelectorAll('.faq-btn');
        
        this.setupResponseDatabase();
        this.setupDirectAnswers();
        this.initializeEventListeners();
        this.initializeChat();
    }

    setupDirectAnswers() {
        // Direct answers for typed queries (1-2 lines each)
        this.directAnswers = {
            // Mission/Aim/Purpose related - NEW ADDITIONS
            'aim': 'The aim of Iron Lady programs is to "Enable a Million Women to Reach the TOP" through comprehensive leadership development and business war tactics.',
            'mission': 'Our mission is "Enabling a Million Women to Reach the TOP" by empowering women with leadership skills and business strategies.',
            'purpose': 'The purpose is to empower women leaders with practical skills like Business War Tactics, shameless pitching, and strategic thinking.',
            'goal': 'Our goal is to enable a million women to reach top leadership positions in business and society through proven methodologies.',
            'objectives': 'The objectives are developing women leaders, teaching business war tactics, building confidence, and creating a network of successful women.',
            'why': 'Iron Lady exists to bridge the leadership gap for women by providing tactical business skills and unapologetic mindset development.',
            'vision': 'Our vision is to create a world where a million women hold top leadership positions across industries and sectors.',
            'what for': 'Iron Lady programs are designed to prepare women for C-suite positions, board memberships, and entrepreneurial success.',
            'benefit': 'The main benefits are leadership skills, business war tactics, networking opportunities, and confidence to reach top positions.',
            'outcome': 'Expected outcomes include enhanced leadership capabilities, strategic thinking, shameless pitching skills, and career advancement.',
            'target': 'We target ambitious women who want to break glass ceilings and achieve top leadership positions in their careers.',
            'focus': 'Our focus is on practical leadership skills, business warfare tactics, and building an unapologetic mindset for women leaders.',
            
            // Programs related
            'programs': 'We offer 4 main programs: Leadership Essentials (4 weeks), 100 Board Members (6 months), 1-Crore Club, and 3-Day Masterclass.',
            'courses': 'We offer 4 main programs: Leadership Essentials (4 weeks), 100 Board Members (6 months), 1-Crore Club, and 3-Day Masterclass.',
            'training': 'Our leadership training includes Business War Tactics, shameless pitching, and strategic maximization for women leaders.',
            'what do you offer': 'We offer leadership programs, business war tactics training, mentorship, certification, and a supportive women leaders community.',
            
            // Duration related
            'duration': 'Program durations vary: 3-Day Masterclass (3 days), LEP (4 weeks + 1 year community), 100 Board Members (6 months).',
            'time': 'Program durations vary: 3-Day Masterclass (3 days), LEP (4 weeks + 1 year community), 100 Board Members (6 months).',
            'long': 'Program durations vary from 3 days to 6 months, with LEP offering additional 1-year community learning.',
            'how long': 'Program durations range from 3 days (Masterclass) to 6 months (100 Board Members) with ongoing community support.',
            
            // Format related
            'online': 'Yes, all our programs are available in both online and offline formats for maximum flexibility.',
            'offline': 'Yes, all our programs are available in both online and offline formats for maximum flexibility.',
            'format': 'All programs are available in both online and offline formats to suit your schedule and preferences.',
            'remote': 'Yes, all our programs can be attended remotely through our online platform.',
            'virtual': 'Yes, we offer virtual versions of all programs with live interaction and mentorship.',
            
            // Certification related
            'certificate': 'Yes, all our programs provide certificates, with some certified by Tata Institute of Social Sciences (TISS).',
            'certification': 'Yes, all our programs provide certificates, with some certified by Tata Institute of Social Sciences (TISS).',
            'certified': 'Yes, our programs are certified with some having TISS (Tata Institute of Social Sciences) certification.',
            'credential': 'You receive professional credentials and certificates upon program completion, some backed by TISS.',
            
            // Mentors related
            'mentors': 'Our mentors include Suvarna Hegde (CEO), Rajesh Bhat (Founder), Simon Newman, and other successful business leaders.',
            'coaches': 'Our coaches include Suvarna Hegde (CEO), Rajesh Bhat (Founder), Simon Newman, and other successful business leaders.',
            'teachers': 'Our expert faculty includes Suvarna Hegde (CEO), Rajesh Bhat (Founder), and experienced business leaders.',
            'faculty': 'Our expert faculty includes Suvarna Hegde (CEO), Rajesh Bhat (Founder), and experienced business leaders.',
            'who teaches': 'Programs are led by Suvarna Hegde (CEO), Rajesh Bhat (Founder), and other accomplished business leaders.',
            
            // Pricing related
            'price': 'Program fees range from Rs. 129 (3-Day Masterclass) to Rs. 29,000 (Leadership Essentials Program).',
            'cost': 'Program fees range from Rs. 129 (3-Day Masterclass) to Rs. 29,000 (Leadership Essentials Program).',
            'fees': 'Program fees range from Rs. 129 (3-Day Masterclass) to Rs. 29,000 (Leadership Essentials Program).',
            'money': 'Program investment ranges from Rs. 129 (3-Day Masterclass) to Rs. 29,000 (Leadership Essentials Program).',
            'cheap': 'Our most affordable option is the 3-Day Masterclass at Rs. 129, offering great value for leadership basics.',
            'expensive': 'Our premium programs like LEP (Rs. 14,800-29,000) offer comprehensive training with year-long community access.',
            
            // Contact related
            'contact': 'We are located in Bangalore. Visit iamironlady.com or check our contact section for detailed information.',
            'location': 'We are based in Bangalore, Karnataka. Our office is in Mahadevapura, Bangalore.',
            'address': 'Our office is located at KIADB plot#8, Sadaramangala road, Mahadevapura, Bangalore, Karnataka 560048.',
            'phone': 'Please visit our website iamironlady.com for the latest contact information and phone numbers.',
            'reach': 'You can reach us through our website iamironlady.com or visit our Bangalore office in Mahadevapura.',
            
            // Specific program queries
            'lep': 'Leadership Essentials Program (LEP) is 4 weeks + 1 year community learning, available online/offline, priced Rs. 14,800-29,000.',
            'leadership essentials': 'Leadership Essentials Program is 4 weeks + 1 year community learning, available online/offline, priced Rs. 14,800-29,000.',
            'board members': '100 Board Members Program is 6 months long, prepares women for corporate boards, available online/offline.',
            'masterclass': '3-Day Masterclass costs Rs. 129, covers B-HAG setting and differentiated branding basics.',
            'crore club': '1-Crore Club Program helps women achieve crore-plus incomes through business growth strategies.',
            
            // Skills and learning related
            'skills': 'You will learn Business War Tactics, shameless pitching, strategic maximization, and unapologetic leadership mindset.',
            'learn': 'You will learn leadership strategies, business warfare tactics, pitching skills, and confidence-building techniques.',
            'topics': 'Key topics include Business War Tactics, shameless pitching, strategic thinking, and building an unapologetic mindset.',
            'curriculum': 'The curriculum covers practical leadership skills, business strategies, pitching techniques, and mindset development.',
            'content': 'Program content includes Business War Tactics, strategic maximization, shameless pitching, and leadership development.',
            
            // Results and success related
            'results': 'Iron Lady has impacted 78,000+ women since 2017, helping them achieve leadership positions and business success.',
            'success': 'Success stories include women reaching board positions, achieving crore-plus incomes, and advancing to C-suite roles.',
            'impact': 'Our impact includes 78,000+ women empowered, leadership positions achieved, and a growing community of successful women leaders.',
            
            // General queries
            'about': 'Iron Lady enables a million women to reach the TOP through leadership programs. Founded in 2017 by Rajesh Bhat and Suvarna Hegde.',
            'what is iron lady': 'Iron Lady is a leadership development organization founded in 2017, focused on enabling women to reach top positions.',
            'women': 'We specialize in leadership development exclusively for women, having impacted 78,000+ women since 2017.',
            'help': 'I can help you learn about our programs, duration, certification, mentors, pricing, and contact information.',
            'info': 'I provide information about Iron Lady programs, mission, duration, certification, mentors, pricing, and contact details.',
            
            // Default responses for unclear queries
            'default': 'I can help you with information about our programs, duration, certification, mentors, pricing, or contact details. What would you like to know?',
            'unclear': 'Could you please be more specific? I can provide details about programs, duration, certification, mentors, or pricing.'
        };
    }

    setupResponseDatabase() {
        this.responses = {
            welcome: {
                message: `🙋‍♀️ Welcome to Iron Lady Leadership Programs! 

I'm here to help you learn about our mission of "Enabling a Million Women to Reach the TOP". 

You can ask me about:
• Our leadership programs and their features
• Program durations and schedules  
• Online/offline format options
• Certification and recognition
• Our expert mentors and coaches
• Program investment and pricing
• Contact information and next steps

Feel free to use the quick buttons or type your questions!`,
                type: 'bot'
            },

            programs: {
                message: `📚 **Iron Lady Leadership Programs:**

We offer comprehensive leadership programs designed for women who want to reach the top:`,
                type: 'bot',
                cards: [
                    {
                        type: 'program',
                        name: 'Leadership Essentials Program (LEP)',
                        details: '**Duration:** 4 weeks + 1 year community learning\n**Format:** Online & Offline\n**Features:** Business War Tactics, Shameless Pitching, Strategic Maximization, Unapologetic Mindset\n**Price:** Rs. 14,800 - Rs. 29,000'
                    },
                    {
                        type: 'program',
                        name: '100 Board Members Program',
                        details: '**Duration:** 6 months\n**Format:** Online & Offline\n**Features:** Board-level preparation, Individual mentorship, Leadership at highest levels\n**Focus:** Corporate board readiness'
                    },
                    {
                        type: 'program',
                        name: '1-Crore Club Program',
                        details: '**Duration:** Varies\n**Format:** Online & Offline\n**Features:** Achieve crore-plus incomes, Business growth strategies\n**Focus:** Financial leadership goals'
                    },
                    {
                        type: 'program',
                        name: '3-Day Masterclass',
                        details: '**Duration:** 3 days\n**Format:** Online\n**Features:** B-HAG setting, Differentiated branding, Shameless pitching basics\n**Price:** Rs. 129 (discounted from Rs. 499)'
                    }
                ]
            },

            duration: {
                message: `⏰ **Program Duration Information:**

Our programs are designed with different time commitments to fit your schedule:

**🎯 3-Day Masterclass:** 3 days intensive
**📈 Leadership Essentials Program:** 4 weeks + 1 year community learning
**🏆 100 Board Members Program:** 6 months (one session per month)
**💰 1-Crore Club Program:** Varies based on individual goals

All programs include ongoing community support and networking opportunities.`,
                type: 'bot'
            },

            format: {
                message: `💻 **Program Format Options:**

**Online Programs:**
• Attend from anywhere with internet connection
• Live interactive sessions with mentors
• Digital learning materials and resources
• Virtual networking opportunities

**Offline Programs:**
• In-person sessions in Bangalore
• Face-to-face mentorship and coaching
• Direct networking with peers
• Hands-on workshop experiences

**Hybrid Options Available:** Many programs offer both online and offline components for maximum flexibility.`,
                type: 'bot'
            },

            certification: {
                message: `🎓 **Certification & Recognition:**

**✅ All Programs Include:**
• Official Iron Lady completion certificates
• Professional recognition for LinkedIn profiles
• Skill validation documentation

**🏛️ TISS Certification:**
• Some programs are certified by Tata Institute of Social Sciences (TISS)
• Nationally recognized academic institution backing
• Enhanced credibility for professional advancement

**📜 Additional Benefits:**
• Community membership certificate
• Access to Iron Lady alumni network
• Continuing education credits`,
                type: 'bot'
            },

            mentors: {
                message: `👥 **Our Expert Mentors & Coaches:**`,
                type: 'bot',
                cards: [
                    {
                        type: 'mentor',
                        name: 'Suvarna Hegde - CEO',
                        details: '**Background:** Creator of Business War Tactics for Women, Innovation specialist\n**Experience:** Ex-Infosys, Robert Bosch, Philips\n**Expertise:** Strategic business warfare, women leadership'
                    },
                    {
                        type: 'mentor',
                        name: 'Rajesh Bhat - Founder/Director',
                        details: '**Background:** Multiple social enterprises founder, TEDx speaker\n**Recognition:** CNN Real Hero of India\n**Expertise:** Entrepreneurship, social impact, leadership development'
                    },
                    {
                        type: 'mentor',
                        name: 'Simon Newman - Board Member',
                        details: '**Background:** Global CEO with extensive corporate experience\n**Expertise:** Corporate governance, international business, strategic leadership'
                    },
                    {
                        type: 'mentor',
                        name: 'Additional Expert Faculty',
                        details: '**Team:** Successful CEOs, business leaders, and industry experts\n**Focus:** Specialized mentorship in various business domains\n**Approach:** Individual coaching and group mentoring'
                    }
                ]
            },

            pricing: {
                message: `💰 **Program Investment & Pricing:**

**🌟 3-Day Masterclass:** Rs. 129 (Special offer - originally Rs. 499)
**📈 Leadership Essentials Program:** Rs. 14,800 - Rs. 29,000
**🏆 100 Board Members Program:** Premium tier (Contact for pricing)
**💎 1-Crore Club Program:** Premium tier (Contact for pricing)

**💡 Value Includes:**
• Expert mentorship and coaching
• Comprehensive learning materials  
• Community access and networking
• Certification and recognition
• Ongoing support and resources

**💳 Payment Options:** Flexible payment plans available for most programs.`,
                type: 'bot'
            },

            contact: {
                message: `📞 **Contact Iron Lady:**

**🌐 Website:** https://iamironlady.com
**📍 Location:** Bangalore, Karnataka, India
**🏢 Address:** KIADB plot#8, 1st cross, Sadaramangala road, Mahadevapura post, Bangalore, Karnataka 560048

**📈 Our Impact:**
• 78,000+ women impacted since 2017
• 17,350+ community followers
• Comprehensive leadership development programs

**🎯 Mission:** "Enabling a Million Women to Reach the TOP"

Visit our website for detailed program information, application processes, and latest updates on our leadership programs.`,
                type: 'bot'
            }
        };
    }

    initializeEventListeners() {
        // Send button click
        this.sendBtn.addEventListener('click', () => this.handleUserInput());
        
        // Enter key press
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.handleUserInput();
            }
        });
        
        // Clear chat button
        this.clearChatBtn.addEventListener('click', () => this.clearChat());
        
        // FAQ buttons
        this.faqButtons.forEach(button => {
            button.addEventListener('click', () => {
                const question = button.getAttribute('data-question');
                this.handleFAQClick(question);
            });
        });
    }

    initializeChat() {
        // Display welcome message
        this.displayMessage(this.responses.welcome.message, 'bot');
    }

    handleUserInput() {
        const userMessage = this.messageInput.value.trim();
        if (!userMessage) return;

        // Display user message
        this.displayMessage(userMessage, 'user');
        
        // Clear input
        this.messageInput.value = '';
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Process user input and provide direct answer
        setTimeout(() => {
            this.hideTypingIndicator();
            this.processDirectQuery(userMessage);
        }, 1000);
    }

    processDirectQuery(query) {
        const lowerQuery = query.toLowerCase();
        let bestMatch = '';
        let maxScore = 0;

        // Find best matching keywords with improved scoring
        for (const [keyword, response] of Object.entries(this.directAnswers)) {
            if (keyword === 'default' || keyword === 'unclear') continue;
            
            // Calculate matching score
            let score = 0;
            
            // Exact phrase match gets highest priority
            if (lowerQuery.includes(keyword)) {
                score = keyword.length * 2;
            }
            
            // Check for partial matches
            const queryWords = lowerQuery.split(' ');
            const keywordWords = keyword.split(' ');
            
            for (const keywordWord of keywordWords) {
                for (const queryWord of queryWords) {
                    if (queryWord.includes(keywordWord) || keywordWord.includes(queryWord)) {
                        score += keywordWord.length * 0.7;
                    }
                }
            }
            
            if (score > maxScore) {
                maxScore = score;
                bestMatch = keyword;
            }
        }

        // Provide direct answer
        if (bestMatch && maxScore > 0) {
            this.displayMessage(this.directAnswers[bestMatch], 'bot');
        } else {
            // Fallback for unclear queries
            this.displayMessage(this.directAnswers['default'], 'bot');
        }
    }

    handleFAQClick(question) {
        // Display user question
        this.displayMessage(question, 'user');
        
        // Show typing indicator
        this.showTypingIndicator();
        
        // Process FAQ response
        setTimeout(() => {
            this.hideTypingIndicator();
            this.processFAQResponse(question);
        }, 800);
    }

    processFAQResponse(question) {
        const lowerQuestion = question.toLowerCase();
        
        if (lowerQuestion.includes('programs') && lowerQuestion.includes('offer')) {
            this.displayMessage(this.responses.programs.message, 'bot');
            this.displayProgramCards(this.responses.programs.cards);
        } else if (lowerQuestion.includes('duration')) {
            this.displayMessage(this.responses.duration.message, 'bot');
        } else if (lowerQuestion.includes('online') || lowerQuestion.includes('offline')) {
            this.displayMessage(this.responses.format.message, 'bot');
        } else if (lowerQuestion.includes('certificate')) {
            this.displayMessage(this.responses.certification.message, 'bot');
        } else if (lowerQuestion.includes('mentors') || lowerQuestion.includes('coaches')) {
            this.displayMessage(this.responses.mentors.message, 'bot');
            this.displayMentorCards(this.responses.mentors.cards);
        } else if (lowerQuestion.includes('fees') || lowerQuestion.includes('pricing')) {
            this.displayMessage(this.responses.pricing.message, 'bot');
        } else if (lowerQuestion.includes('contact')) {
            this.displayMessage(this.responses.contact.message, 'bot');
        }
    }

    displayMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        
        const messageContent = document.createElement('div');
        messageContent.className = 'message-content';
        messageContent.innerHTML = this.formatMessage(message);
        
        const timestamp = document.createElement('div');
        timestamp.className = 'message-timestamp';
        timestamp.textContent = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
        
        messageDiv.appendChild(messageContent);
        messageDiv.appendChild(timestamp);
        
        this.chatMessages.appendChild(messageDiv);
        this.scrollToBottom();
    }

    displayProgramCards(cards) {
        cards.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'program-card';
            cardDiv.innerHTML = `
                <h4>${card.name}</h4>
                <div class="card-details">${this.formatMessage(card.details)}</div>
            `;
            this.chatMessages.appendChild(cardDiv);
        });
        this.scrollToBottom();
    }

    displayMentorCards(cards) {
        cards.forEach(card => {
            const cardDiv = document.createElement('div');
            cardDiv.className = 'mentor-card';
            cardDiv.innerHTML = `
                <h4>${card.name}</h4>
                <div class="card-details">${this.formatMessage(card.details)}</div>
            `;
            this.chatMessages.appendChild(cardDiv);
        });
        this.scrollToBottom();
    }

    formatMessage(message) {
        return message
            .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
            .replace(/\*(.*?)\*/g, '<em>$1</em>')
            .replace(/\n/g, '<br>');
    }

    showTypingIndicator() {
        this.typingIndicator.style.display = 'flex';
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        this.typingIndicator.style.display = 'none';
    }

    scrollToBottom() {
        setTimeout(() => {
            this.chatMessages.scrollTop = this.chatMessages.scrollHeight;
        }, 100);
    }

    clearChat() {
        this.chatMessages.innerHTML = '';
        this.initializeChat();
    }
}

// Initialize the chatbot when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new IronLadyChatbot();
});