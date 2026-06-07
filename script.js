// Games Data
const gamesData = [
    {
        id: 1,
        title: "Pixel Adventure",
        image: "https://images.unsplash.com/photo-1556656793-08538906a9f8?w=400&h=300&fit=crop",
        description: "استمتع برحلة مشوقة عبر عوالم بكسل مجنونة مليئة بالتحديات والمكافآت",
        fullDescription: "Pixel Adventure هي لعبة منصات كلاسيكية مع رسومات بكسل فنية جميلة. اجتز الحواجز والأعداء، اجمع النجوم، واكتشف الأسرار المخفية في كل مستوى. مع 50 مستوى مثيراً وأنماط صعبة تتزايد تدريجياً.",
        rating: 4.8,
        downloads: "500K"
    },
    {
        id: 2,
        title: "Puzzle Master",
        image: "https://images.unsplash.com/photo-1535016120754-188fc019d5f8?w=400&h=300&fit=crop",
        description: "تحدّ عقلك مع ألغاز دماغية مجنونة تتطلب تفكيراً استراتيجياً عميقاً",
        fullDescription: "Puzzle Master يقدم مئات من الألغاز الممتعة والمثيرة. كل مستوى مصمم بعناية لاختبار مهاراتك المنطقية. استمتع بواجهة جميلة وتأثيرات صوتية رائعة.",
        rating: 4.6,
        downloads: "750K"
    },
    {
        id: 3,
        title: "Racing Fever",
        image: "https://images.unsplash.com/photo-1538481143235-5d8926fafd4e?w=400&h=300&fit=crop",
        description: "سباق سريع مليء بالإثارة والمنعطفات الحادة على مسارات مختلفة",
        fullDescription: "Racing Fever هي لعبة سباق بسيطة لكن مضافة جداً. اختر سيارتك، حسّنها، وتسابق ضد لاعبين آخرين على مسارات مختلفة. اربح الذهب وافتح سيارات جديدة.",
        rating: 4.7,
        downloads: "1M"
    },
    {
        id: 4,
        title: "Match Colors",
        image: "https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=400&h=300&fit=crop",
        description: "طابق الألوان المتشابهة وامسح جميع القطع قبل انتهاء الوقت",
        fullDescription: "Match Colors هي لعبة تطابق سريعة الخطى حيث عليك مطابقة الألوان قبل نفاد الوقت. كلما سرعت، كلما حصلت على مكافآت أكثر. اكتشف المفاعلات الخاصة والقوى الإضافية.",
        rating: 4.5,
        downloads: "600K"
    },
    {
        id: 5,
        title: "Space Shooter",
        image: "https://images.unsplash.com/photo-1552820728-8ac41f1ce891?w=400&h=300&fit=crop",
        description: "قاتل الأجانب الغزاة واحمِ الأرض من الفضاء الخارجي المظلم",
        fullDescription: "Space Shooter هي لعبة تصويب الفضاء الكلاسيكية. تحكم بسفينتك الفضائية، تجنب نيران العدو، واطلق النار على المئات من سفن العدو. حسّن أسلحتك وقوتك.",
        rating: 4.9,
        downloads: "800K"
    },
    {
        id: 6,
        title: "Jump Ninja",
        image: "https://images.unsplash.com/photo-1511882642117-4c8ee4e54e3d?w=400&h=300&fit=crop",
        description: "قفز عالياً وتجنب العقبات في هذه اللعبة الإدمانية والممتعة",
        fullDescription: "Jump Ninja هي لعبة قفز بسيطة لكن مليئة بالتحديات. اقفز فوق المنصات المتحركة، تجنب الأشواك والعدو، واجمع العملات. مع 100 مستوى مثير.",
        rating: 4.7,
        downloads: "450K"
    },
    {
        id: 7,
        title: "Memory Cards",
        image: "https://images.unsplash.com/photo-1516975080664-ed2fc6a32937?w=400&h=300&fit=crop",
        description: "تذكر موقع البطاقات والعب مع نفسك أو مع أصدقائك في هذه اللعبة الكلاسيكية",
        fullDescription: "Memory Cards هي لعبة ذاكرة كلاسيكية. اقلب البطاقات وجد الأزواج المتطابقة. يمكنك اللعب وحدك أو ضد أصدقائك. مع مستويات صعوبة مختلفة.",
        rating: 4.4,
        downloads: "350K"
    },
    {
        id: 8,
        title: "Flappy Bird",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",
        description: "طير الطائر من خلال الأنابيب الخطرة واحصل على أعلى نقاط",
        fullDescription: "Flappy Bird هي لعبة تحكم بسيطة لكن صعبة جداً. اضغط لتحليق الطائر أعلى أو أسفل. تجنب الأنابيب واجمع أفضل نقاطك. هل تستطيع التغلب على أصدقائك؟",
        rating: 4.3,
        downloads: "2M"
    }
];

let currentLanguage = localStorage.getItem('gameZoneLanguage') || 'ar';

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const langBtn = document.getElementById('langBtn');
const searchBtn = document.getElementById('searchBtn');
const searchModal = document.getElementById('searchModal');
const searchInput = document.getElementById('searchInput');
const closeSearch = document.getElementById('closeSearch');
const gamesGrid = document.getElementById('gamesGrid');
const gameModal = document.getElementById('gameModal');
const closeModal = document.getElementById('closeModal');
const searchResults = document.getElementById('searchResults');

document.addEventListener('DOMContentLoaded', () => {
    loadGames();
    setupLanguage();
    setupEventListeners();
});

function setupEventListeners() {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    langBtn.addEventListener('click', toggleLanguage);

    searchBtn.addEventListener('click', () => {
        searchModal.classList.add('active');
        searchInput.focus();
    });

    closeSearch.addEventListener('click', () => {
        searchModal.classList.remove('active');
        searchInput.value = '';
        searchResults.innerHTML = '';
    });

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        if (query.length > 0) {
            const results = gamesData.filter(game => 
                game.title.toLowerCase().includes(query) ||
                game.description.toLowerCase().includes(query)
            );
            displaySearchResults(results);
        } else {
            searchResults.innerHTML = '';
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target === searchModal) {
            searchModal.classList.remove('active');
        }
        if (e.target === gameModal) {
            gameModal.classList.remove('active');
        }
    });

    closeModal.addEventListener('click', () => {
        gameModal.classList.remove('active');
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            searchModal.classList.remove('active');
            gameModal.classList.remove('active');
        }
    });
}

function loadGames() {
    gamesGrid.innerHTML = '';
    gamesData.forEach((game, index) => {
        const gameCard = createGameCard(game);
        gamesGrid.appendChild(gameCard);
        gameCard.style.animation = `slideInUp 0.5s ease ${index * 0.1}s forwards`;
        gameCard.style.opacity = '0';
    });
}

function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    const ratingStars = generateStars(game.rating);
    card.innerHTML = `
        <div style="position: relative;">
            <img src="${game.image}" alt="${game.title}" class="game-image">
            <div class="play-overlay" onclick="openGameModal(${game.id})">
                <i class="fas fa-play"></i>
            </div>
        </div>
        <div class="game-info">
            <h3 class="game-title">${game.title}</h3>
            <p class="game-description">${game.description}</p>
            <div class="game-rating">
                ${ratingStars}
                <span class="rating-value">${game.rating}</span>
            </div>
            <div class="game-footer">
                <button class="btn-small btn-download" onclick="openGameModal(${game.id})">
                    <i class="fas fa-download"></i> <span>${currentLanguage === 'ar' ? 'تنزيل' : 'Download'}</span>
                </button>
                <button class="btn-small btn-play" onclick="openGameModal(${game.id})">
                    <i class="fas fa-play"></i> <span>${currentLanguage === 'ar' ? 'تشغيل' : 'Play'}</span>
                </button>
            </div>
        </div>
    `;
    return card;
}

function generateStars(rating) {
    let stars = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            stars += '<i class="fas fa-star"></i>';
        } else if (i === fullStars && hasHalfStar) {
            stars += '<i class="fas fa-star-half-alt"></i>';
        } else {
            stars += '<i class="far fa-star"></i>';
        }
    }
    return stars;
}

function openGameModal(gameId) {
    const game = gamesData.find(g => g.id === gameId);
    if (game) {
        document.getElementById('modalImage').src = game.image;
        document.getElementById('modalTitle').textContent = game.title;
        document.getElementById('modalDescription').textContent = game.fullDescription;
        const ratingStars = generateStars(game.rating);
        document.getElementById('modalRating').innerHTML = `
            ${ratingStars}
            <span class="rating-value">${game.rating}</span>
        `;
        document.getElementById('downloadAndroid').onclick = () => {
            downloadGame('android', game.title);
        };
        document.getElementById('downloadIphone').onclick = () => {
            downloadGame('iphone', game.title);
        };
        gameModal.classList.add('active');
    }
}

function downloadGame(platform, gameName) {
    alert(`${currentLanguage === 'ar' ? 'سيتم تحميل لعبة' : 'Downloading'} ${gameName} ${currentLanguage === 'ar' ? 'على' : 'for'} ${platform === 'android' ? 'Android' : 'iPhone'}`);
}

function displaySearchResults(results) {
    searchResults.innerHTML = '';
    if (results.length === 0) {
        searchResults.innerHTML = `<p style="text-align: center; color: #64748b; padding: 2rem;">${currentLanguage === 'ar' ? 'لم يتم العثور على لعبة' : 'No games found'}</p>`;
        return;
    }
    results.forEach(game => {
        const resultItem = document.createElement('div');
        resultItem.className = 'search-result-item';
        resultItem.onclick = () => {
            openGameModal(game.id);
            searchModal.classList.remove('active');
        };
        resultItem.innerHTML = `
            <img src="${game.image}" alt="${game.title}">
            <div>
                <div style="font-weight: 600; color: #1e293b;">${game.title}</div>
                <div style="color: #64748b; font-size: 0.9rem;">${game.description}</div>
            </div>
        `;
        searchResults.appendChild(resultItem);
    });
}

function toggleLanguage() {
    currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
    localStorage.setItem('gameZoneLanguage', currentLanguage);
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    updateLanguage();
    loadGames();
}

function setupLanguage() {
    document.documentElement.lang = currentLanguage;
    document.documentElement.dir = currentLanguage === 'ar' ? 'rtl' : 'ltr';
    updateLanguage();
}

function updateLanguage() {
    document.querySelectorAll('[data-en][data-ar]').forEach(element => {
        if (element.hasAttribute('data-en')) {
            element.textContent = currentLanguage === 'ar' 
                ? element.getAttribute('data-ar')
                : element.getAttribute('data-en');
        }
    });
    const inputs = document.querySelectorAll('input[placeholder]');
    inputs.forEach(input => {
        if (input.id === 'searchInput') {
            input.placeholder = currentLanguage === 'ar' ? 'ابحث عن لعبة...' : 'Search for a game...';
        }
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({behavior: 'smooth'});
        }
    });
});

window.addEventListener('load', () => {
    document.body.style.opacity = '1';
});