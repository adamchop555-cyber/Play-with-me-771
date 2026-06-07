// Language Management
let currentLanguage = 'ar';

const translations = {
    ar: {
        'home': 'الرئيسية',
        'about': 'حول',
        'search_placeholder': 'ابحث عن لعبة...',
        'our_games': 'ألعابنا',
        'choose_game': 'اختر لعبتك المفضلة وابدأ باللعب الآن!',
        'download_android': 'تحميل أندرويد',
        'download_iphone': 'تحميل آيفون',
        'play_now': 'العب الآن'
    },
    en: {
        'home': 'Home',
        'about': 'About',
        'search_placeholder': 'Search for a game...',
        'our_games': 'Our Games',
        'choose_game': 'Choose your favorite game and start playing now!',
        'download_android': 'Download Android',
        'download_iphone': 'Download iPhone',
        'play_now': 'Play Now'
    }
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderGames();
    setupEventListeners();
    loadLanguage();
});

// Setup Event Listeners
function setupEventListeners() {
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const searchBtn = document.getElementById('searchBtn');
    const searchModal = document.getElementById('searchModal');
    const closeSearch = document.getElementById('closeSearch');
    const gameModal = document.getElementById('gameModal');
    const closeModal = document.getElementById('closeModal');
    const modalOverlay = document.getElementById('modalOverlay');
    const langToggle = document.getElementById('langToggle');
    const searchInput = document.getElementById('searchInput');

    // Menu Toggle
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.style.color = navMenu.classList.contains('active') ? '#ec4899' : '#6366f1';
    });

    // Close menu when clicking nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.style.color = '#6366f1';
        });
    });

    // Search Modal
    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });

    closeSearch.addEventListener('click', () => {
        searchModal.classList.remove('active');
    });

    searchModal.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
    });

    // Search Input
    searchInput.addEventListener('input', (e) => {
        handleSearch(e.target.value);
    });

    // Game Modal
    closeModal.addEventListener('click', () => {
        gameModal.classList.remove('active');
    });

    modalOverlay.addEventListener('click', () => {
        gameModal.classList.remove('active');
    });

    // Language Toggle
    langToggle.addEventListener('click', toggleLanguage);
}

// Render Games
function renderGames(gamesToRender = gamesData) {
    const gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.innerHTML = '';

    gamesToRender.forEach(game => {
        const card = createGameCard(game);
        gamesGrid.appendChild(card);
    });
}

// Create Game Card
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    const gameName = currentLanguage === 'ar' ? game.nameAr : game.nameEn;
    const gameDesc = currentLanguage === 'ar' ? game.descriptionAr : game.descriptionEn;
    
    const starsHTML = createStarsHTML(game.rating);

    card.innerHTML = `
        <div class="game-card-image">
            <img src="${game.image}" alt="${gameName}">
            <div class="game-card-overlay">
                <button class="play-now-btn" onclick="openGameModal(${game.id})">
                    ${translations[currentLanguage]['play_now']}
                </button>
            </div>
        </div>
        <div class="game-card-content">
            <h3 class="game-card-title">${gameName}</h3>
            <p class="game-card-description">${gameDesc}</p>
            <div class="game-card-footer">
                <div class="stars">${starsHTML}</div>
                <span class="download-text" onclick="openGameModal(${game.id})">
                    ${currentLanguage === 'ar' ? 'تحميل' : 'Download'}
                </span>
            </div>
        </div>
    `;

    return card;
}

// Create Stars HTML
function createStarsHTML(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += '<span class="star">⭐</span>';
        } else if (i === fullStars && hasHalfStar) {
            starsHTML += '<span class="star">⭐</span>';
        } else {
            starsHTML += '<span class="star">☆</span>';
        }
    }

    return starsHTML;
}

// Open Game Modal
function openGameModal(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (!game) return;

    const modal = document.getElementById('gameModal');
    const gameName = currentLanguage === 'ar' ? game.nameAr : game.nameEn;
    const fullDesc = currentLanguage === 'ar' ? game.fullDescriptionAr : game.fullDescriptionEn;

    document.getElementById('modalGameTitle').textContent = gameName;
    document.getElementById('modalGameImage').src = game.image;
    document.getElementById('modalGameDescription').textContent = fullDesc;
    document.getElementById('modalGameRating').innerHTML = createStarsHTML(game.rating);
    document.getElementById('modalGameRatingText').textContent = `${game.rating} (${game.reviews} ${currentLanguage === 'ar' ? 'تقييم' : 'reviews'})`;

    const downloadAndroidBtn = document.getElementById('downloadAndroid');
    const downloadIPhoneBtn = document.getElementById('downloadIPhone');

    downloadAndroidBtn.onclick = () => window.open(game.androidLink, '_blank');
    downloadIPhoneBtn.onclick = () => window.open(game.iphoneLink, '_blank');

    modal.classList.add('active');
}

// Search Handler
function handleSearch(query) {
    const searchResults = document.getElementById('searchResults');
    searchResults.innerHTML = '';

    if (query.length < 2) {
        return;
    }

    const results = gamesData.filter(game => {
        const nameAr = game.nameAr.toLowerCase();
        const nameEn = game.nameEn.toLowerCase();
        const q = query.toLowerCase();
        return nameAr.includes(q) || nameEn.includes(q);
    });

    if (results.length === 0) {
        searchResults.innerHTML = `<p style="text-align: center; color: #94a3b8; padding: 1rem;">${currentLanguage === 'ar' ? 'لم يتم العثور على نتائج' : 'No results found'}</p>`;
        return;
    }

    results.forEach(result => {
        const resultName = currentLanguage === 'ar' ? result.nameAr : result.nameEn;
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                    <strong>${resultName}</strong>
                    <p style="color: #94a3b8; font-size: 0.85rem; margin-top: 0.3rem;">${result.rating} ⭐</p>
                </div>
                <button onclick="openGameModal(${result.id})" style="background: #6366f1; color: white; border: none; padding: 0.5rem 1rem; border-radius: 5px; cursor: pointer;">
                    ${currentLanguage === 'ar' ? 'عرض' : 'View'}
                </button>
            </div>
        `;
        searchResults.appendChild(resultItem);
    });
}

// Language Management
function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = currentLanguage;
    localStorage.setItem('language', currentLanguage);
    updateLanguage();
    renderGames();
}

function updateLanguage() {
    // Update nav items
    document.querySelectorAll('[data-ar][data-en]').forEach(el => {
        if (el.tagName !== 'INPUT') {
            el.textContent = currentLanguage === 'ar' ? el.dataset.ar : el.dataset.en;
        }
    });

    // Update placeholders
    const searchInput = document.getElementById('searchInput');
    searchInput.placeholder = currentLanguage === 'ar' ? 'ابحث عن لعبة...' : 'Search for a game...';
}

function loadLanguage() {
    const saved = localStorage.getItem('language');
    if (saved) {
        currentLanguage = saved;
        document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
        document.documentElement.lang = currentLanguage;
        updateLanguage();
    }
}

// Close search modal on ESC
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        document.getElementById('searchModal').classList.remove('active');
        document.getElementById('gameModal').classList.remove('active');
    }
});