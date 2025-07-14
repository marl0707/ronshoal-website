// インタラクティブ体験の完全な実装
let userAge = 35;
let checkedItems = 0;
let lastDayAnswer = '';
let checkedCategories = {
    self: 0,
    work: 0,
    relationship: 0,
    health: 0,
    challenge: 0
};
const avgHealthyLifespan = 75;

// インタラクティブ体験を開始
function startInteractiveExperience() {
    const experienceDiv = document.getElementById('interactiveExperience');
    experienceDiv.innerHTML = `
        <style>
            /* インタラクティブ体験用のスタイル */
            #interactiveExperience {
                font-family: 'Noto Sans JP', sans-serif;
                background: #000;
                color: #fff;
            }
            
            .skip-experience {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 0.5rem 1.5rem;
                background: transparent;
                border: 1px solid rgba(255, 255, 255, 0.3);
                color: rgba(255, 255, 255, 0.7);
                font-size: 0.9rem;
                cursor: pointer;
                transition: all 0.3s ease;
                z-index: 10000;
                border-radius: 25px;
            }
            
            .skip-experience:hover {
                border-color: rgba(255, 255, 255, 0.8);
                color: #fff;
                background: rgba(255, 255, 255, 0.1);
            }
            
            /* フェーズ1: 年齢入力 */
            .age-input-phase {
                position: fixed;
                width: 100%;
                height: 100vh;
                background: #000;
                display: flex;
                align-items: center;
                justify-content: center;
                z-index: 1000;
                transition: opacity 1s ease-out;
            }
            
            .age-box {
                text-align: center;
                animation: fadeIn 1s ease-out;
            }
            
            .age-box h1 {
                font-size: 2.5rem;
                font-weight: 300;
                margin-bottom: 2rem;
                opacity: 0.9;
            }
            
            .age-input {
                font-size: 4rem;
                background: transparent;
                border: none;
                border-bottom: 2px solid #fff;
                color: #fff;
                text-align: center;
                width: 200px;
                padding: 1rem;
                margin: 0 1rem;
            }
            
            .age-submit {
                display: block;
                margin: 3rem auto 0;
                padding: 1rem 3rem;
                background: transparent;
                border: 2px solid #fff;
                color: #fff;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .age-submit:hover {
                background: #fff;
                color: #000;
                transform: scale(1.05);
            }
            
            /* フェーズ2: カウントダウン */
            .countdown-phase {
                position: fixed;
                width: 100%;
                height: 100vh;
                background: #000;
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 900;
                overflow: hidden;
            }
            
            .countdown-container {
                text-align: center;
                position: relative;
                z-index: 10;
            }
            
            .countdown-label {
                font-size: 1.8rem;
                font-weight: 300;
                margin-bottom: 1rem;
                opacity: 0;
                animation: fadeIn 2s ease-out forwards;
            }
            
            .remaining-days {
                font-size: 10rem;
                font-weight: 900;
                line-height: 1;
                margin: 0.5rem 0;
                opacity: 0;
                position: relative;
                display: inline-block;
                animation: countdownReveal 3s ease-out 1s forwards;
            }
            
            @keyframes countdownReveal {
                0% {
                    opacity: 0;
                    transform: scale(0.5) rotateX(90deg);
                    filter: blur(10px);
                }
                50% {
                    opacity: 1;
                    transform: scale(1.2) rotateX(0deg);
                    filter: blur(0px);
                    text-shadow: 0 0 50px rgba(255, 255, 255, 0.8);
                }
                100% {
                    opacity: 1;
                    transform: scale(1) rotateX(0deg);
                    filter: blur(0px);
                    text-shadow: 0 0 30px rgba(255, 255, 255, 0.5);
                }
            }
            
            .countdown-note {
                font-size: 0.8rem;
                opacity: 0;
                margin-top: 0.5rem;
                animation: fadeIn 1s ease-out 3s forwards;
            }
            
            .countdown-message {
                margin-top: 3rem;
                font-size: 1.5rem;
                opacity: 0;
                animation: fadeInUp 2s ease-out 4s forwards;
            }
            
            /* フェーズ3: 最後の日 */
            .last-day-phase {
                position: fixed;
                width: 100%;
                height: 100vh;
                background: #000;
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 800;
                overflow: hidden;
            }
            
            .last-day-container {
                max-width: 800px;
                padding: 2rem;
                text-align: center;
                position: relative;
                z-index: 10;
            }
            
            .last-day-title {
                font-size: 3rem;
                font-weight: 700;
                margin-bottom: 3rem;
                opacity: 0;
                animation: titleReveal 3s ease-out forwards;
            }
            
            .last-day-input {
                width: 100%;
                background: rgba(255, 255, 255, 0.05);
                border: 1px solid rgba(255, 255, 255, 0.2);
                color: #fff;
                padding: 2rem;
                font-size: 1.2rem;
                line-height: 1.8;
                min-height: 200px;
                resize: none;
                opacity: 0;
                animation: inputFadeIn 2s ease-out 2s forwards;
                transition: all 0.3s ease;
                text-align: center;
            }
            
            .last-day-submit {
                margin-top: 2rem;
                padding: 1rem 3rem;
                background: transparent;
                border: 2px solid #fff;
                color: #fff;
                font-size: 1.2rem;
                cursor: pointer;
                transition: all 0.3s ease;
                opacity: 0;
                animation: buttonSlideUp 1s ease-out 3s forwards;
            }
            
            .last-day-submit:hover {
                background: #fff;
                color: #000;
                transform: scale(1.05);
            }
            
            /* フェーズ4: 後悔チェックリスト */
            .regret-checklist-phase {
                position: fixed;
                width: 100%;
                height: 100vh;
                background: #000;
                display: none;
                z-index: 700;
                overflow-y: auto;
            }
            
            .checklist-container {
                max-width: 900px;
                margin: 0 auto;
                padding: 4rem 2rem;
            }
            
            .checklist-header {
                text-align: center;
                margin-bottom: 3rem;
            }
            
            .checklist-title {
                font-size: 2.5rem;
                font-weight: 700;
                margin-bottom: 1rem;
            }
            
            .regret-category {
                background: rgba(255, 255, 255, 0.05);
                padding: 2rem;
                border-radius: 10px;
                margin-bottom: 2rem;
                opacity: 0;
                animation: slideUp 0.5s ease-out forwards;
            }
            
            .category-title {
                font-size: 1.8rem;
                font-weight: 700;
                margin-bottom: 1.5rem;
                display: flex;
                align-items: center;
                gap: 1rem;
            }
            
            .regret-item {
                display: flex;
                align-items: center;
                gap: 1rem;
                padding: 0.5rem;
                cursor: pointer;
                transition: all 0.3s ease;
            }
            
            .regret-checkbox {
                width: 24px;
                height: 24px;
                border: 2px solid #fff;
                border-radius: 4px;
                position: relative;
                transition: all 0.3s ease;
            }
            
            .regret-checkbox.checked {
                background: #fff;
            }
            
            .regret-checkbox.checked::after {
                content: '✓';
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                color: #000;
                font-weight: bold;
            }
            
            /* フェーズ5: 未来の手紙 */
            .future-letter-phase {
                position: fixed;
                width: 100%;
                height: 100vh;
                background: #000;
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 600;
                overflow-y: auto;
            }
            
            .letter-container {
                max-width: 800px;
                padding: 4rem 2rem;
                margin: auto;
            }
            
            .letter-content {
                background: rgba(255, 255, 255, 0.05);
                padding: 3rem;
                border-radius: 10px;
                font-size: 1.1rem;
                line-height: 2;
                opacity: 0;
                animation: fadeIn 2s ease-out 1s forwards;
            }
            
            /* フェーズ6: 選択画面 */
            .choice-phase {
                position: fixed;
                width: 100%;
                height: 100vh;
                background: #000;
                display: none;
                align-items: center;
                justify-content: center;
                z-index: 500;
            }
            
            .choice-container {
                max-width: 1200px;
                padding: 2rem;
                text-align: center;
            }
            
            .choice-title {
                font-size: 3rem;
                font-weight: 700;
                margin-bottom: 1rem;
                opacity: 0;
                animation: fadeIn 2s ease-out forwards;
            }
            
            .choice-options {
                display: grid;
                grid-template-columns: repeat(2, 1fr);
                gap: 3rem;
                margin-bottom: 3rem;
            }
            
            .choice-card {
                background: rgba(255, 255, 255, 0.05);
                padding: 3rem;
                border-radius: 20px;
                border: 2px solid transparent;
                transition: all 0.3s ease;
                cursor: pointer;
                opacity: 0;
                animation: slideUp 0.5s ease-out forwards;
            }
            
            .choice-card:hover {
                border-color: #00d4ff;
                transform: translateY(-10px);
                box-shadow: 0 20px 40px rgba(0, 212, 255, 0.2);
            }
            
            /* アニメーション */
            @keyframes fadeIn {
                from {
                    opacity: 0;
                    transform: translateY(20px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes slideUp {
                from {
                    opacity: 0;
                    transform: translateY(50px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            @keyframes titleReveal {
                0% {
                    opacity: 0;
                    letter-spacing: 0.5em;
                    filter: blur(10px);
                }
                100% {
                    opacity: 1;
                    letter-spacing: normal;
                    filter: blur(0);
                }
            }
            
            @keyframes inputFadeIn {
                from {
                    opacity: 0;
                    transform: scale(0.9);
                }
                to {
                    opacity: 1;
                    transform: scale(1);
                }
            }
            
            @keyframes buttonSlideUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
            
            .hidden {
                display: none !important;
            }
            
            .fade-out {
                opacity: 0 !important;
                pointer-events: none;
            }
        </style>
        
        <!-- スキップボタン -->
        <button class="skip-experience" onclick="closeInteractiveExperience()">閉じる</button>
        
        <!-- フェーズ1: 年齢入力 -->
        <div class="age-input-phase" id="phase1">
            <div class="age-box">
                <h1>あなたの年齢を教えてください</h1>
                <input type="number" class="age-input" id="userAge" min="1" max="120" value="35">
                <span style="font-size: 2rem;">歳</span>
                <button class="age-submit" onclick="startJourney()">体験を始める</button>
            </div>
        </div>
        
        <!-- フェーズ2: 残り時間カウントダウン -->
        <div class="countdown-phase" id="phase2">
            <div class="countdown-container">
                <div class="countdown-label">あなたに残された時間は</div>
                <div class="remaining-days" id="remainingDays">----</div>
                <div class="countdown-label">日</div>
                <div class="countdown-note">※平均健康寿命から換算</div>
                <div class="countdown-message">この時間を、どう使いますか？</div>
            </div>
        </div>
        
        <!-- フェーズ3: 最後の日 -->
        <div class="last-day-phase" id="phase3">
            <div class="last-day-container">
                <h2 class="last-day-title">もし明日がなかったら</h2>
                <textarea class="last-day-input" id="lastDayInput" placeholder="誰に何を伝えたいですか？何をやり残していますか？"></textarea>
                <button class="last-day-submit" onclick="processLastDay()">次へ</button>
            </div>
        </div>
        
        <!-- フェーズ4: 後悔チェックリスト -->
        <div class="regret-checklist-phase" id="phase4">
            <div class="checklist-container">
                <div class="checklist-header">
                    <h2 class="checklist-title">人生の後悔チェックリスト</h2>
                    <p class="checklist-subtitle">多くの人が死ぬ前に後悔すること。あなたは大丈夫？</p>
                </div>
                
                <div class="regret-categories">
                    <div class="regret-category">
                        <h3 class="category-title">自分らしさ・本音</h3>
                        <div class="regret-items">
                            <div class="regret-item" onclick="toggleCheck(this)">
                                <div class="regret-checkbox"></div>
                                <span class="regret-text">他人の期待に応えるために自分を犠牲にしている</span>
                            </div>
                            <div class="regret-item" onclick="toggleCheck(this)">
                                <div class="regret-checkbox"></div>
                                <span class="regret-text">本当にやりたいことを我慢している</span>
                            </div>
                            <div class="regret-item" onclick="toggleCheck(this)">
                                <div class="regret-checkbox"></div>
                                <span class="regret-text">自分の感情を素直に表現できていない</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <button class="last-day-submit" onclick="showFutureLetter()" style="margin-top: 2rem;">80歳の自分からの手紙を読む</button>
            </div>
        </div>
        
        <!-- フェーズ5: 80歳の自分からの手紙 -->
        <div class="future-letter-phase" id="phase5">
            <div class="letter-container">
                <div class="letter-header">
                    <h2 class="letter-title">80歳のあなたからの手紙</h2>
                </div>
                <div class="letter-content" id="letterContent">
                    <p>若い日の私へ</p>
                    <p>人生はあっという間でした。後悔しないように、今を大切に生きてください。</p>
                    <p>家族との時間、健康、そして自分らしく生きることを忘れずに。</p>
                </div>
                <button class="last-day-submit" onclick="showChoices()" style="margin-top: 2rem;">今すぐ行動を始める</button>
            </div>
        </div>
        
        <!-- フェーズ6: 選択画面 -->
        <div class="choice-phase" id="phase6">
            <div class="choice-container">
                <h2 class="choice-title">今日から始める、後悔のない人生</h2>
                <p class="choice-subtitle">あなたが求めているのは？</p>
                
                <div class="choice-options">
                    <div class="choice-card" onclick="selectService('medical')">
                        <div class="choice-icon">🏥</div>
                        <div class="choice-name">医療サービス</div>
                        <div class="choice-description">
                            健康を守る・育てる<br>
                            医療×テクノロジーで後悔のない人生を
                        </div>
                    </div>
                    
                    <div class="choice-card" onclick="selectService('other')">
                        <div class="choice-icon">💡</div>
                        <div class="choice-name">その他サービス</div>
                        <div class="choice-description">
                            ビジネスを革新する<br>
                            イノベーションで新しい価値を
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    experienceDiv.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// インタラクティブ体験を閉じる
function closeInteractiveExperience() {
    document.getElementById('interactiveExperience').style.display = 'none';
    document.body.style.overflow = 'auto';
}

// 体験開始
function startJourney() {
    userAge = parseInt(document.getElementById('userAge').value) || 35;
    document.getElementById('phase1').classList.add('fade-out');
    
    setTimeout(() => {
        document.getElementById('phase1').classList.add('hidden');
        document.getElementById('phase2').classList.remove('hidden');
        document.getElementById('phase2').style.display = 'flex';
        startCountdown();
        
        // 10秒後に次のフェーズへ
        setTimeout(() => {
            document.getElementById('phase2').classList.add('fade-out');
            setTimeout(() => {
                document.getElementById('phase2').classList.add('hidden');
                document.getElementById('phase3').classList.remove('hidden');
                document.getElementById('phase3').style.display = 'flex';
            }, 1000);
        }, 10000);
    }, 1000);
}

// カウントダウン開始
function startCountdown() {
    const birthYear = new Date().getFullYear() - userAge;
    const healthyDeathYear = birthYear + avgHealthyLifespan;
    const healthyDeathDate = new Date(healthyDeathYear, 0, 1);
    
    const now = new Date();
    const remaining = healthyDeathDate - now;
    
    if (remaining > 0) {
        const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
        const daysElement = document.getElementById('remainingDays');
        
        // カウントアップアニメーション
        let currentValue = 0;
        const targetValue = days;
        const duration = 2000;
        const increment = targetValue / (duration / 16);
        
        setTimeout(() => {
            const countUp = setInterval(() => {
                currentValue += increment;
                if (currentValue >= targetValue) {
                    currentValue = targetValue;
                    clearInterval(countUp);
                }
                daysElement.textContent = Math.floor(currentValue).toLocaleString();
            }, 16);
        }, 1000);
    } else {
        document.getElementById('remainingDays').textContent = '0';
    }
}

// 最後の日の処理
function processLastDay() {
    lastDayAnswer = document.getElementById('lastDayInput').value;
    
    document.getElementById('phase3').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('phase3').classList.add('hidden');
        document.getElementById('phase4').classList.remove('hidden');
        document.getElementById('phase4').style.display = 'block';
    }, 1000);
}

// チェックボックスの切り替え
function toggleCheck(item) {
    const checkbox = item.querySelector('.regret-checkbox');
    checkbox.classList.toggle('checked');
    
    if (checkbox.classList.contains('checked')) {
        checkedItems++;
    } else {
        checkedItems--;
    }
}

// 未来の手紙を表示
function showFutureLetter() {
    document.getElementById('phase4').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('phase4').classList.add('hidden');
        document.getElementById('phase5').classList.remove('hidden');
        document.getElementById('phase5').style.display = 'flex';
    }, 1000);
}

// 選択画面を表示
function showChoices() {
    document.getElementById('phase5').classList.add('fade-out');
    setTimeout(() => {
        document.getElementById('phase5').classList.add('hidden');
        document.getElementById('phase6').classList.remove('hidden');
        document.getElementById('phase6').style.display = 'flex';
    }, 1000);
}

// サービス選択
function selectService(service) {
    let url = '';
    
    switch(service) {
        case 'medical':
            url = 'medical-services.html';
            break;
        case 'other':
            url = 'other-services.html';
            break;
    }
    
    window.location.href = url;
}

// グローバルスコープに関数を公開
window.startInteractiveExperience = startInteractiveExperience;
window.closeInteractiveExperience = closeInteractiveExperience;
window.startJourney = startJourney;
window.processLastDay = processLastDay;
window.toggleCheck = toggleCheck;
window.showFutureLetter = showFutureLetter;
window.showChoices = showChoices;
window.selectService = selectService;