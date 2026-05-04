'use strict';

/* ═══════════════════════════════════════
   MODAL DATA
═══════════════════════════════════════ */
const modalData = {

    /* ── ATTRACTIONS ── */
    'modal-panguil': {
        title: 'Panguil Bay',
        badge: 'Nature',
        heroImg: 'images/panguil-bay.jpg', 
        gallery: ['images/panguil-1.jpg', 'images/panguil-2.jpg', 'images/panguil-3.jpg'],
        body: `
      <p>Panguil Bay is a stunning bay straddling the provinces of Misamis Occidental and Lanao del Norte. Its calm, clear waters serve as both a source of livelihood and a scenic backdrop that defines the identity of Tangub City.</p>
      <p>Visitors are treated to spectacular sunsets, gentle sea breezes, and views of rolling hills on the opposite shore. The bay is especially popular in the early morning when fishing boats glide silently across the glassy waters.</p>
      <h4>What to Experience</h4>
      <ul>
        <li>Sunset watching from the bayside promenade</li>
        <li>Fresh seafood dining at local bayside eateries</li>
        <li>Bancá boat rides across the calm bay waters</li>
        <li>Photography of the sunrise and fishing activities</li>
        <li>Community fishing culture and maritime traditions</li>
      </ul>`,
        info: [
            { label: 'Location', value: 'Western coast of Tangub City' },
            { label: 'Best Time', value: 'December – May (dry season)' },
            { label: 'Activities', value: 'Boating, fishing, dining' },
            { label: 'Access', value: 'Open year-round, free entry' },
        ]
    },

    'modal-ricefields': {
        title: 'Golden Rice Fields',
        badge: 'Agriculture',
        heroImg: 'images/rice-fields.jpg',
        gallery: ['images/rice-1.jpg', 'images/rice-2.jpg', 'images/rice-3.jpg'],
        body: `
      <p>The vast rice paddies of Tangub City are the very symbol of its identity as the "Rice Granary of Misamis Occidental." Stretching across the city's fertile lowland plains, these fields turn a lush emerald green in the wet season and golden amber at harvest time.</p>
      <p>Traveling through the countryside, visitors are greeted with an endless tapestry of terraced fields, irrigation canals, and hardworking farmers whose families have cultivated these lands for generations.</p>
      <h4>Agricultural Facts</h4>
      <ul>
        <li>One of the highest rice producers in Misamis Occidental</li>
        <li>Two cropping seasons per year: wet (June–November) and dry (December–May)</li>
        <li>Predominantly irrigated lowland rice cultivation</li>
        <li>Home to multiple rice mills supplying the broader region</li>
        <li>Corn and coconut are also major secondary crops</li>
      </ul>`,
        info: [
            { label: 'Type', value: 'Lowland irrigated rice' },
            { label: 'Peak Season', value: 'October–November (harvest)' },
            { label: 'Area', value: 'Covers majority of Tangub plains' },
            { label: 'Produce', value: 'Rice, Corn, Coconut' },
        ]
    },

    'modal-church': {
        title: 'St. John the Baptist Parish',
        badge: 'Heritage',
        heroImg: 'images/church.JPG',
        gallery: ['images/church-1.jpg', 'images/church-2.jpg', 'images/church-3.jpg'],
        body: `
      <p>The Parish of St. John the Baptist stands as the spiritual heart of Tangub City. This beloved church has been central to the faith life of the community for many decades, serving as the venue for countless baptisms, weddings, and community milestones.</p>
      <p>The church showcases elements of traditional Filipino ecclesiastical architecture, blending Spanish colonial influences with local artistic sensibilities. Its bell tower is a recognizable landmark visible from much of the city center.</p>
      <h4>Parish Highlights</h4>
      <ul>
        <li>Patron saint: St. John the Baptist — feast day celebrated June 24</li>
        <li>Historic Spanish-influenced architectural elements</li>
        <li>Annual fiesta celebrated with great community fervor</li>
        <li>Active parish organizations serving the entire city</li>
        <li>Venue for diocesan events and regional celebrations</li>
      </ul>`,
        info: [
            { label: 'Patron Saint', value: 'St. John the Baptist' },
            { label: 'Feast Day', value: 'June 24' },
            { label: 'Architecture', value: 'Spanish Colonial influence' },
            { label: 'Location', value: 'City center, near the plaza' },
        ]
    },

    'modal-plaza': {
        title: 'City Plaza & Park',
        badge: 'Leisure',
        heroImg: 'images/plaza.jpg',
        gallery: ['images/plaza-1.jpg', 'images/plaza-2.jpg', 'images/plaza-3.jpg'],
        body: `
      <p>The Tangub City Plaza is the beating heart of public life — a beloved gathering place where the community comes together for festivals, civic events, casual recreation, and everyday social interaction.</p>
      <p>Surrounded by important civic buildings including the City Hall and the Parish Church, the plaza is perfectly positioned at the center of the city's historical and administrative core. At night, it transforms into a lively social space illuminated by lights and filled with the laughter of families.</p>
      <h4>Plaza Activities</h4>
      <ul>
        <li>Festival celebrations and cultural performances</li>
        <li>Evening strolls and family recreation</li>
        <li>City anniversaries and civic ceremonies</li>
        <li>Christmas and New Year celebrations</li>
        <li>Daily community gathering spot for all ages</li>
      </ul>`,
        info: [
            { label: 'Type', value: 'Public park & civic space' },
            { label: 'Location', value: 'Tangub City center' },
            { label: 'Hours', value: 'Open 24 hours' },
            { label: 'Nearby', value: 'City Hall, Parish Church' },
        ]
    },

    'modal-market': {
        title: 'Public Market',
        badge: 'Commerce',
        heroImg: 'images/market.jpg',
        gallery: ['images/market-1.jpg', 'images/market-2.jpg', 'images/market-3.jpg'],
        body: `
      <p>The Tangub City Public Market is the commercial nucleus of the city — a vibrant, bustling hub where locals shop for everything from freshly harvested agricultural produce to daily essentials. It is one of the liveliest and most culturally rich spaces in the city.</p>
      <p>The market is especially known for its exceptional variety of seafood caught daily from the waters of Panguil Bay. Vendors arrive in the early hours of the morning, and by dawn, the market is alive with the sounds and colors of commerce.</p>
      <h4>Market Highlights</h4>
      <ul>
        <li>Fresh Panguil Bay seafood — fish, shrimp, crabs, and more</li>
        <li>Locally grown rice, vegetables, and tropical fruits</li>
        <li>Dry goods, clothing, and household products</li>
        <li>Street food stalls offering local delicacies</li>
        <li>Early morning wet market activity from 4:00 AM onward</li>
      </ul>`,
        info: [
            { label: 'Hours', value: '4:00 AM – 6:00 PM daily' },
            { label: 'Specialty', value: 'Fresh seafood & local produce' },
            { label: 'Type', value: 'Public wet & dry market' },
            { label: 'Location', value: 'City commercial district' },
        ]
    },

    'modal-falls': {
        title: 'Natural Waterfalls',
        badge: 'Adventure',
        heroImg: 'images/falls.jpg',
        gallery: ['images/falls-1.jpg', 'images/falls-2.jpg', 'images/falls-3.jpg'],
        body: `
      <p>Hidden within the lush hinterlands of Tangub City are several natural waterfalls that reward adventurous visitors with breathtaking scenery and refreshing cool waters. These falls are tucked away in forested mountain terrain, offering an authentic eco-tourism experience far from the city bustle.</p>
      <p>The waterfalls are fed by mountain streams and rivers that originate from the elevated interior of Misamis Occidental. Surrounding the falls are dense tropical vegetation, endemic bird species, and a pristine natural environment.</p>
      <h4>Eco-Tourism Tips</h4>
      <ul>
        <li>Best visited during the wet season for full water flow</li>
        <li>Bring proper footwear for rocky and muddy trails</li>
        <li>Local guides available for safe navigation</li>
        <li>Pack out all trash — leave no trace policy</li>
        <li>Ideal for photography, trekking, and nature lovers</li>
      </ul>`,
        info: [
            { label: 'Type', value: 'Natural waterfall / eco-tourism' },
            { label: 'Best Season', value: 'June – October (wet season)' },
            { label: 'Difficulty', value: 'Moderate hiking required' },
            { label: 'Tip', value: 'Hire a local guide' },
        ]
    },

    /* ── CULTURE ── */
    'modal-fiesta': {
        title: 'Fiesta Celebrations',
        badge: 'Festival',
        heroImg: 'images/festival.jpg',
        gallery: ['images/fiesta-1.jpg', 'images/fiesta-2.jpg', 'images/fiesta-3.jpg'],
        body: `
      <p>The annual Fiesta of Tangub City, held in honor of its patron saint St. John the Baptist on June 24, is the grandest celebration in the city calendar. The entire community comes alive with processions, cultural performances, street dancing, and the unmistakable spirit of Filipino festivity.</p>
      <p>Preparations begin weeks in advance, with barangays competing in various events, local artisans showcasing their crafts, and households welcoming friends, relatives, and visitors with generosity and warmth. The fiesta embodies the bayanihan spirit at its most joyful.</p>
      <h4>Fiesta Events</h4>
      <ul>
        <li>Grand Fluvial Procession along Panguil Bay</li>
        <li>Solemn Mass and religious procession</li>
        <li>Street dancing and cultural competition</li>
        <li>Agri-trade fair and local products exhibit</li>
        <li>Sports competitions and pageantry</li>
        <li>Fireworks display over the bay</li>
      </ul>`,
        info: [
            { label: 'Date', value: 'June 24 (St. John the Baptist)' },
            { label: 'Duration', value: 'Week-long celebration' },
            { label: 'Highlight', value: 'Fluvial Procession' },
            { label: 'Atmosphere', value: 'Joyful, communal, vibrant' },
        ]
    },

    'modal-cuisine': {
        title: 'Local Cuisine',
        badge: 'Food',
        heroImg: 'images/cuisine.jpg',
        gallery: ['images/food-1.jpg', 'images/food-2.jpg', 'images/food-3.jpg'],
        body: `
      <p>Tangub City's culinary tradition is a rich tapestry shaped by its dual identity as an agricultural city and a coastal community. The cuisine seamlessly blends the bounty of its rice fields, the freshness of Panguil Bay's catch, and the bold flavors of Mindanao cooking.</p>
      <p>Rice is the cornerstone of every meal, often accompanied by freshly caught fish prepared in various ways — grilled, steamed, or in the popular sinigang and kinilaw preparations. Local delicacies reflect generations of culinary craftsmanship passed down through families.</p>
      <h4>Must-Try Local Dishes</h4>
      <ul>
        <li>Kinilaw na Isda — fresh fish ceviche with coconut vinegar</li>
        <li>Sinugbang Bangus — grilled milkfish from the bay</li>
        <li>Tinolang Isda — ginger-based fish soup</li>
        <li>Lechon — roasted pig for fiesta celebrations</li>
        <li>Biko and Puto — native rice cakes made from local harvest</li>
        <li>Tuba — local coconut wine from Tangub's coconut trees</li>
      </ul>`,
        info: [
            { label: 'Specialty', value: 'Panguil Bay seafood' },
            { label: 'Staple', value: 'Locally grown rice' },
            { label: 'Must Try', value: 'Kinilaw & Sinugba' },
            { label: 'Markets', value: 'Public Market, bayside stalls' },
        ]
    },

    'modal-arts': {
        title: 'Arts & Music',
        badge: 'Arts',
        heroImg: 'images/arts.jpg',
        gallery: ['images/arts-1.jpg', 'images/arts-2.jpg', 'images/arts-3.jpg'],
        body: `
      <p>The artistic soul of Tangub City is expressed through its vibrant tradition of folk music, indigenous dance forms, and community craftsmanship. These art forms are not relics of the past — they are living traditions actively celebrated in schools, cultural organizations, and community events throughout the year.</p>
      <p>Local schools play a vital role in preserving the arts, with student groups performing Mindanao folk dances and competing in regional festivals. Visual arts and crafts — from weaving to woodcarving — also contribute to the city's cultural economy.</p>
      <h4>Cultural Arts Highlights</h4>
      <ul>
        <li>Sinulog and Cariñosa folk dance performances</li>
        <li>Kuinteto — traditional string ensemble music</li>
        <li>Bamboo craft and indigenous weaving traditions</li>
        <li>School-based Sayaw Pilipinas cultural troupes</li>
        <li>Annual Arts & Culture Month celebrations in October</li>
        <li>Local visual artists showcasing Mindanao life</li>
      </ul>`,
        info: [
            { label: 'Language', value: 'Cebuano / Bisaya' },
            { label: 'Folk Dance', value: 'Cariñosa, Sinulog' },
            { label: 'Crafts', value: 'Weaving, bamboo, wood' },
            { label: 'Events', value: 'October Arts & Culture Month' },
        ]
    },

    'modal-bayanihan': {
        title: 'Bayanihan Spirit',
        badge: 'Community',
        heroImg: 'images/bayanihan.jpg',
        gallery: ['images/bayan-1.jpg', 'images/bayan-2.jpg', 'images/bayan-3.jpg'],
        body: `
      <p>At the core of Tangub City's social fabric is the timeless Filipino tradition of Bayanihan — the spirit of communal unity, cooperation, and mutual assistance. In Tangub, this is not merely a cultural concept but a lived daily reality that binds the city's 34 barangays together.</p>
      <p>From helping neighbors rebuild after disasters, to community clean-up drives, to the collective preparation for fiesta celebrations, the Bayanihan spirit manifests in countless ways throughout the year. It is the invisible thread that connects every family, every barangay, and every generation in Tangub.</p>
      <h4>Community Initiatives</h4>
      <ul>
        <li>Brigada Eskwela — community school repair drives every May</li>
        <li>Barangay Cleanup Saturdays</li>
        <li>Communal farming assistance during planting and harvest</li>
        <li>Disaster relief mobilization through Barangay Councils</li>
        <li>Neighborhood watch and peace-keeping cooperation</li>
        <li>Collective preparations for fiesta and civic events</li>
      </ul>`,
        info: [
            { label: 'Value', value: 'Community unity & cooperation' },
            { label: 'Expression', value: 'Year-round, all barangays' },
            { label: 'Example', value: 'Brigada Eskwela, disaster relief' },
            { label: 'Spirit', value: 'Distinctly Filipino' },
        ]
    },

    'modal-history': {
        title: 'History & Heritage',
        badge: 'History',
        heroImg: 'images/history.jpg',
        gallery: ['images/hist-1.jpg', 'images/hist-2.jpg', 'images/hist-3.jpg'],
        body: `
      <p>Tangub's history stretches back to its early settlement along the fertile coastal plains of Panguil Bay. The area was originally inhabited by indigenous communities before Spanish colonization brought significant changes to the settlement patterns, religious life, and governance of the region.</p>
      <p>The name "Tangub" is believed to be derived from a local term referring to the area's geographic characteristics. Over centuries, the town grew as an agricultural and trading community, eventually earning cityhood through Republic Act No. 8300, signed on June 6, 1997.</p>
      <h4>Historical Milestones</h4>
      <ul>
        <li>Pre-colonial settlement along Panguil Bay coastline</li>
        <li>Spanish colonization brought Christianity and church establishment</li>
        <li>American period brought public education and civil governance</li>
        <li>Post-war agricultural development of the plains</li>
        <li>Conversion to municipality under Misamis Occidental</li>
        <li>Cityhood proclaimed via RA 8300, June 6, 1997</li>
      </ul>`,
        info: [
            { label: 'Cityhood', value: 'June 6, 1997 (RA 8300)' },
            { label: 'Province', value: 'Misamis Occidental' },
            { label: 'Region', value: 'Region X — Northern Mindanao' },
            { label: 'Barangays', value: '34 barangays' },
        ]
    },

   

    

    /* ── SERVICES ── */
    'modal-health': {
        title: 'Health Services',
        badge: 'Health',
        heroImg: 'images/health.jpg',
        gallery: ['images/health-1.jpg', 'images/health-2.jpg', 'images/health-3.jpg'],
        body: `
      <p>The City Health Office (CHO) of Tangub delivers comprehensive public health services to all residents across the city's 34 barangays. The office operates through a network of Rural Health Units (RHUs) and Barangay Health Centers that provide accessible primary healthcare.</p>
      <p>Key health programs include maternal and child health, immunization, tuberculosis control, nutrition programs, and non-communicable disease management. The city regularly conducts Barangay Health Days (Lingap sa Barangay) bringing health services directly to communities.</p>
      <h4>Available Health Services</h4>
      <ul>
        <li>Free consultations at City Health Office and RHUs</li>
        <li>Maternal and child health — prenatal, delivery, post-natal care</li>
        <li>Immunization program for infants and children</li>
        <li>TB DOTS (Directly Observed Treatment Short-course)</li>
        <li>Senior citizen and PWD health programs</li>
        <li>Philhealth enrollment assistance and indigent coverage</li>
        <li>Dental services at select health centers</li>
        <li>Nutrition and feeding programs for malnourished children</li>
      </ul>`,
        info: [
            { label: 'Office', value: 'City Health Office (CHO)' },
            { label: 'Facilities', value: 'RHUs + 34 BHCs' },
            { label: 'Hours', value: 'Mon–Fri, 8:00 AM–5:00 PM' },
            { label: 'Coverage', value: 'All 34 barangays' },
        ]
    },

    'modal-education': {
        title: 'Education Services',
        badge: 'Education',
        heroImg: 'images/education.jpg',
        gallery: ['images/edu-1.jpg', 'images/edu-2.jpg', 'images/edu-3.jpg'],
        body: `
      <p>Tangub City places a high priority on education, operating numerous public elementary and secondary schools under the Department of Education's Tangub City Division. The city also supports alternative learning, scholarship programs, and early childhood development through the DSWD's Pantawid Pamilyang Pilipino Program.</p>
      <p>The City Government's Scholarship Program provides financial assistance to deserving college students from low-income families, reflecting the city's commitment to making higher education accessible to all residents.</p>
      <h4>Education Programs & Services</h4>
      <ul>
        <li>Public elementary and secondary schools — DepEd Tangub City Division</li>
        <li>Alternative Learning System (ALS) for out-of-school youth and adults</li>
        <li>City Scholarship Program for college students</li>
        <li>Early Childhood Care and Development (ECCD) centers</li>
        <li>Brigada Eskwela — community school preparation drives</li>
        <li>Madrasah program for Muslim learners</li>
        <li>Special Education (SPED) programs for children with disabilities</li>
      </ul>`,
        info: [
            { label: 'Governing Body', value: 'DepEd Tangub City Division' },
            { label: 'Scholarship', value: 'City Government program' },
            { label: 'ALS', value: 'Available citywide' },
            { label: 'ECCD', value: 'Barangay-based centers' },
        ]
    },

    'modal-publicworks': {
        title: 'Public Works',
        badge: 'Infrastructure',
        heroImg: 'images/publicworks.jpg',
        gallery: ['images/pw-1.jpg', 'images/pw-2.jpg', 'images/pw-3.jpg'],
        body: `
      <p>The City Engineering Office and the Committee on Infrastructure & Public Works oversee the planning, construction, and maintenance of all public infrastructure in Tangub City. This includes roads, bridges, drainage systems, flood control structures, public buildings, and community facilities across all 34 barangays.</p>
      <p>Ongoing and completed infrastructure projects aim to improve connectivity, reduce flooding, and enhance the quality of public spaces for residents. The city coordinates with national agencies including DPWH for major infrastructure programs.</p>
      <h4>Infrastructure Programs</h4>
      <ul>
        <li>Road concreting and rehabilitation — barangay and city roads</li>
        <li>Bridge construction and repair projects</li>
        <li>Flood control and drainage improvement</li>
        <li>Public market facilities and urban infrastructure</li>
        <li>Barangay multi-purpose halls and facilities</li>
        <li>School buildings and government facility construction</li>
        <li>Street lighting and public utilities improvement</li>
      </ul>`,
        info: [
            { label: 'Office', value: 'City Engineering Office' },
            { label: 'Coverage', value: 'All 34 barangays' },
            { label: 'Partner', value: 'DPWH national programs' },
            { label: 'Focus', value: 'Roads, drainage, bridges' },
        ]
    },

    'modal-socialwelfare': {
        title: 'Social Welfare Services',
        badge: 'Social Welfare',
        heroImg: 'images/welfare.jpg',
        gallery: ['images/sw-1.jpg', 'images/sw-2.jpg', 'images/sw-3.jpg'],
        body: `
      <p>The City Social Welfare and Development Office (CSWDO) provides a wide range of social protection programs and services to the most vulnerable members of Tangub City's population — including children, women, senior citizens, persons with disabilities, and families in need.</p>
      <p>The office coordinates national programs such as the Pantawid Pamilyang Pilipino Program (4Ps), implements local social assistance, and manages community-based support systems across all barangays.</p>
      <h4>Social Welfare Programs</h4>
      <ul>
        <li>Pantawid Pamilyang Pilipino Program (4Ps) coordination</li>
        <li>Senior Citizens Affairs — ID, benefits, and assistance</li>
        <li>Persons with Disability (PWD) registration and benefits</li>
        <li>Solo Parents welfare services and assistance</li>
        <li>Women and children protection program</li>
        <li>Crisis intervention and emergency assistance</li>
        <li>Livelihood assistance and skills training programs</li>
        <li>Community-based rehabilitation services</li>
      </ul>`,
        info: [
            { label: 'Office', value: 'City Social Welfare & Development Office' },
            { label: 'Programs', value: '4Ps, AICS, PWD, Senior' },
            { label: 'Hours', value: 'Mon–Fri, 8:00 AM–5:00 PM' },
            { label: 'Contact', value: 'CSWDO, Tangub City Hall' },
        ]
    },

    
};

/* ═══════════════════════════════════════
   NAVBAR
═══════════════════════════════════════ */
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

hamburger.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    hamburger.classList.toggle('open', isOpen);
    hamburger.setAttribute('aria-expanded', String(isOpen));
    document.body.style.overflow = isOpen ? 'hidden' : '';
});

navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
});

document.addEventListener('click', (e) => {
    if (navMenu.classList.contains('open') && !navbar.contains(e.target)) closeMenu();
});

function closeMenu() {
    navMenu.classList.remove('open');
    hamburger.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
}

window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

/* Active link on scroll */
const sections = document.querySelectorAll('section[id]');
function setActiveLink() {
    const scrollPos = window.scrollY + 100;
    sections.forEach(section => {
        const top = section.offsetTop;
        const bottom = top + section.offsetHeight;
        const id = section.getAttribute('id');
        const link = document.querySelector(`.nav-link[href="#${id}"]`);
        if (link) {
            link.classList.toggle('active', scrollPos >= top && scrollPos < bottom);
        }
    });
}
window.addEventListener('scroll', setActiveLink, { passive: true });
setActiveLink();

/* Smooth scroll */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            const navH = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) || 74;
            window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH, behavior: 'smooth' });
        }
    });
});

/* Escape key */
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (navMenu.classList.contains('open')) closeMenu();
        if (document.getElementById('modalOverlay').classList.contains('open')) closeModal();
    }
});

/* ═══════════════════════════════════════
   HERO SLIDESHOW
═══════════════════════════════════════ */
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let currentSlide = 0;
let slideshowInterval;

function goToSlide(n) {
    slides[currentSlide].classList.remove('active');
    indicators[currentSlide].classList.remove('active');
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
    indicators[currentSlide].classList.add('active');
}

function startSlideshow() {
    slideshowInterval = setInterval(() => goToSlide(currentSlide + 1), 5000);
}

indicators.forEach(btn => {
    btn.addEventListener('click', () => {
        clearInterval(slideshowInterval);
        goToSlide(parseInt(btn.dataset.slide));
        startSlideshow();
    });
});

startSlideshow();

/* ═══════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════ */
function initReveal() {
    const targets = document.querySelectorAll('[data-reveal]');
    if (!('IntersectionObserver' in window)) {
        targets.forEach(el => el.classList.add('revealed'));
        return;
    }
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
            if (entry.isIntersecting) {
                entry.target.style.transitionDelay = `${(entry.target.dataset.delay || 0) * 80}ms`;
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    targets.forEach((el, i) => {
        el.dataset.delay = i % 6;
        observer.observe(el);
    });
}
initReveal();

/* ═══════════════════════════════════════
   MODAL SYSTEM
═══════════════════════════════════════ */
const modalOverlay = document.getElementById('modalOverlay');
const modalContent = document.getElementById('modalContent');
const modalClose = document.getElementById('modalClose');

function buildModal(data) {
    const gallery = data.gallery.map(src => `
    <div class="modal-gallery-item">
      <img src="${src}" alt="Gallery image" onerror="this.parentElement.style.background='#ccc'" />
    </div>`).join('');

    const infoGrid = data.info.map(item => `
    <div class="modal-info-item">
      <strong>${item.label}</strong>
      <span>${item.value}</span>
    </div>`).join('');

    return `
    <div class="modal-hero">
      <img src="${data.heroImg}" alt="${data.title}" onerror="this.parentElement.style.background='linear-gradient(135deg,#2D5016,#1a2e0a)'" />
    </div>
    <span class="modal-badge">${data.badge}</span>
    <h2 class="modal-title">${data.title}</h2>
    <div class="modal-body">${data.body}</div>
    <div class="modal-gallery">${gallery}</div>
    <div class="modal-info-grid">${infoGrid}</div>`;
}

function openModal(id) {
    const data = modalData[id];
    if (!data) return;
    modalContent.innerHTML = buildModal(data);
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
    document.getElementById('modalBox').scrollTop = 0;
}

function closeModal() {
    modalOverlay.classList.remove('open');
    document.body.style.overflow = '';
}

/* Bind all clickable cards */
document.querySelectorAll('[data-modal]').forEach(el => {
    el.addEventListener('click', () => openModal(el.dataset.modal));
});

/* Service cards */
document.querySelectorAll('.service-card[data-modal]').forEach(el => {
    el.addEventListener('click', () => openModal(el.dataset.modal));
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeModal();
});

/* ═══════════════════════════════════════
   BROKEN IMAGES
═══════════════════════════════════════ */
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        const p = img.parentElement;
        if (p) p.classList.add('empty-photo');
    });
    if (img.complete && img.naturalWidth === 0) {
        const p = img.parentElement;
        if (p) p.classList.add('empty-photo');
    }
});

console.log('%c⚜ Tangub City — Enhanced Website Loaded', 'color:#C9972A;font-size:14px;font-weight:bold;');
