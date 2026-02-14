// --- 1. Typewriter Effect ---
        const text = "Building creative web experiences. Exploring JavaScript, one project at a time.";
        const typeWriterElement = document.getElementById('typewriter');
        let i = 0;

        function typeWriter() {
            if (i < text.length) {
                typeWriterElement.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, 30); // Speed of typing
            }
        }
        window.onload = typeWriter;

        // --- 2. Interactive Search & Filter ---
        const searchInput = document.getElementById('projectSearch');
        const cards = document.querySelectorAll('.project-card');
        const filterTabs = document.querySelectorAll('.gh-nav li');

        // Search Key Shortcut (/)
        document.addEventListener('keydown', (e) => {
            if (e.key === '/' && document.activeElement !== searchInput) {
                e.preventDefault();
                searchInput.focus();
            }
        });

        // Filtering Logic
        function filterProjects() {
            const query = searchInput.value.toLowerCase();
            const activeCategory = document.querySelector('.gh-nav li.active').dataset.filter;

            cards.forEach(card => {
                const title = card.querySelector('.repo-name').innerText.toLowerCase();
                const desc = card.querySelector('.description').innerText.toLowerCase();
                const category = card.dataset.category;
                
                const matchesSearch = title.includes(query) || desc.includes(query);
                const matchesCategory = activeCategory === 'all' || 
                                        (activeCategory === 'js' && category === 'js') ||
                                        (activeCategory === 'html' && (category === 'html' || category === 'css'));

                if (matchesSearch && matchesCategory) {
                    card.style.display = 'block';
                    // Add small animation when filtering
                    card.style.animation = 'fadeIn 0.3s ease';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        searchInput.addEventListener('input', filterProjects);

        filterTabs.forEach(tab => {
            tab.addEventListener('click', () => {
                filterTabs.forEach(t => t.classList.remove('active'));
                tab.classList.add('active');
                filterProjects();
            });
        });

        // --- 3. 3D Tilt Effect (Vanilla JS) ---
        document.querySelectorAll('.project-card').forEach(card => {
            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                
                const rotateX = ((y - centerY) / centerY) * -5; // Max 5deg rotation
                const rotateY = ((x - centerX) / centerX) * 5;

                card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
                
                // Dynamic border glow position
                card.style.setProperty('--x', `${x}px`);
                card.style.setProperty('--y', `${y}px`);
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
            });
        });

        // --- 4. Generate Contribution Strip ---
        const contribContainer = document.getElementById('contributionGraph');
        // Create 50 random squares
        for(let j=0; j<60; j++) {
            const div = document.createElement('div');
            div.classList.add('contrib-box');
            // Randomly assign activity levels
            const level = Math.random() > 0.7 ? (Math.random() > 0.5 ? 'high' : 'med') : 'low';
            if(Math.random() > 0.3) div.classList.add(level);
            contribContainer.appendChild(div);
        }
