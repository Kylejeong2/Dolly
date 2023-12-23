document.addEventListener('DOMContentLoaded', function () {
    const wheelItems = document.querySelectorAll('.wheel-item');
    const spinBtn = document.querySelector('.spin-btn');
    const resultText = document.querySelector('.result');

    let spinning = false;

    function spinWheel() {
        if (!spinning) {
            spinning = true;
            const randomDegree = Math.floor(Math.random() * 360) + 1080; // Random spin degree
            const selectedItem = Math.floor(Math.random() * wheelItems.length); // Randomly select an item

            const rotateValue = randomDegree + (selectedItem * (360 / wheelItems.length));
            resultText.textContent = ''; // Clear previous result

            document.querySelector('.wheel-container').style.transform = `rotate(${rotateValue}deg)`;
            setTimeout(() => {
                resultText.textContent = `You should get ${wheelItems[selectedItem].textContent}!`;
                spinning = false;
            }, 6000); // Show result after the wheel stops spinning
        }
    }

    spinBtn.addEventListener('click', spinWheel);
});

document.addEventListener('DOMContentLoaded', function () {
    // Set your start date here
    const startDate = new Date('2023-07-29'); // Replace 'YYYY-MM-DD' with your actual start date

    function updateTimer() {
        const now = new Date();
        const timeDifference = now.getTime() - startDate.getTime();

        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        document.getElementById('time').innerHTML = `We've been together for ${days} days, ${hours} hours, ${minutes} minutes, and ${seconds} seconds.`;
    }

    // Update the timer every second
    setInterval(updateTimer, 1000);

    // Initial call to display the timer immediately
    updateTimer();
});


function addItem() {
    const itemInput = document.getElementById('itemInput');
    const wishlist = document.getElementById('wishlist');

    if (itemInput.value !== '') {
        const listItem = document.createElement('li');
        listItem.textContent = itemInput.value;
        wishlist.appendChild(listItem);
        itemInput.value = '';
    }
}
