// Loading Animation
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.querySelector('.loading-animation').style.display = 'none';
    }, 3500);

    // Smooth scroll for navigation links
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Populate events
    populateEvents();
});

// Events Data
const eventsData = [
    {
        title: 'Workshop: Restaurimi i Objekteve të Vjetra',
        date: '2024-03-20',
        description: 'Mësoni teknikat e restaurimit nga ekspertët tanë.',
        time: '14:00 - 17:00',
        location: 'Salla e Restaurimit'
    },
    {
        title: 'Vizitë Speciale për Shkollat',
        date: '2024-03-25',
        description: 'Program special edukativ për nxënësit e shkollave.',
        time: '10:00 - 12:00',
        location: 'Salla Kryesore'
    },
    {
        title: 'Ligjëratë: Historia e Dardanisë',
        date: '2024-04-05',
        description: 'Ligjëratë nga Prof. Dr. Enver Rexha mbi historinë e Dardanisë antike.',
        time: '18:00 - 19:30',
        location: 'Amfiteatri'
    }
];

function populateEvents() {
    const eventsList = document.querySelector('.events-list');
    if (!eventsList) return;

    eventsData.forEach(event => {
        const date = new Date(event.date);
        const eventCard = document.createElement('div');
        eventCard.className = 'event-card';
        eventCard.innerHTML = `
            <div class="event-date">
                <div class="date-day">${date.getDate()}</div>
                <div class="date-month">${date.toLocaleString('sq-AL', { month: 'short' })}</div>
            </div>
            <div class="event-info">
                <h3>${event.title}</h3>
                <p>${event.description}</p>
                <p><strong>Koha:</strong> ${event.time}</p>
                <p><strong>Vendi:</strong> ${event.location}</p>
            </div>
            <div class="event-action">
                <a href="#" class="event-button">Regjistrohu</a>
            </div>
        `;
        eventsList.appendChild(eventCard);
    });
}

// Contact Form Handler
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Faleminderit për mesazhin tuaj! Do t\'ju kontaktojmë së shpejti.');
        contactForm.reset();
    });
}