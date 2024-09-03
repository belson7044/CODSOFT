
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.fact-item .number');

    const updateCount = (counter) => {
        const target = +counter.textContent; // The target number
        const speed = 2000; // Duration of the animation (ms)
        const increment = Math.ceil(target / speed * 10); // Calculate the increment value

        let current = 0;
        counter.textContent = current; // Initialize count

        const interval = setInterval(() => {
            current += increment;
            if (current > target) {
                current = target;
                clearInterval(interval);
            }
            counter.textContent = current;
        }, 10); // Interval time
    };

    const handleIntersect = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target.querySelector('.number');
                updateCount(numberElement);
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Stop observing once animation is triggered
            }
        });
    };

    const observer = new IntersectionObserver(handleIntersect, {
        threshold: 0.5 // Trigger when 50% of the element is visible
    });

    // Observe each fact-item element
    document.querySelectorAll('.fact-item').forEach(item => observer.observe(item));
});

