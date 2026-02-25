// 健康パスポート完成ページのJavaScript

// ページ読み込み時にデータを表示
document.addEventListener('DOMContentLoaded', function() {
    displayPassportData();
    setIssueDate();
});

// ローカルストレージからデータを取得して表示
function displayPassportData() {
    const savedData = localStorage.getItem('healthPassportData');
    
    if (!savedData) {
        // データがない場合は新規登録ページへリダイレクト
        alert('健康パスポートのデータが見つかりません。新規登録ページへ移動します。');
        window.location.href = '/services/health-passport-new.html';
        return;
    }
    
    const data = JSON.parse(savedData);
    
    // 基本情報
    document.getElementById('displayName').textContent = data.childName || '-';
    document.getElementById('displayBirthDate').textContent = formatDate(data.birthDate) || '-';
    document.getElementById('displayGender').textContent = formatGender(data.gender) || '-';
    document.getElementById('displayBloodType').textContent = formatBloodType(data.bloodType) || '-';
    
    // 身体情報
    document.getElementById('displayHeight').textContent = data.height ? `${data.height} cm` : '-';
    document.getElementById('displayWeight').textContent = data.weight ? `${data.weight} kg` : '-';
    
    // 健康情報
    document.getElementById('displayAllergies').textContent = data.allergies || 'なし';
    document.getElementById('displayMedications').textContent = data.medications || 'なし';
    document.getElementById('displayMedicalHistory').textContent = data.medicalHistory || 'なし';
    
    // 保護者・緊急連絡先
    document.getElementById('displayParentName').textContent = data.parentName || '-';
    document.getElementById('displayParentPhone').textContent = data.parentPhone || '-';
    
    // 緊急連絡先
    if (data.emergencyName && data.emergencyPhone) {
        const emergencyContact = `${data.emergencyName}（${data.emergencyRelation || ''}） ${data.emergencyPhone}`;
        document.getElementById('displayEmergencyContact').textContent = emergencyContact;
    } else {
        document.getElementById('displayEmergencyContact').textContent = '-';
    }
}

// 日付のフォーマット
function formatDate(dateString) {
    if (!dateString) return '';
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return `${year}年${month}月${day}日`;
}

// 性別のフォーマット
function formatGender(gender) {
    const genderMap = {
        'male': '男の子',
        'female': '女の子',
        'other': 'その他'
    };
    return genderMap[gender] || '-';
}

// 血液型のフォーマット
function formatBloodType(bloodType) {
    if (bloodType === 'unknown') return '不明';
    return bloodType ? `${bloodType}型` : '-';
}

// 発行日の設定
function setIssueDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = today.getMonth() + 1;
    const day = today.getDate();
    document.getElementById('issueDate').textContent = `${year}年${month}月${day}日`;
}

// 印刷機能
function printPassport() {
    window.print();
}

// PDF ダウンロード機能（簡易版）
function downloadPassport() {
    // 実際のPDF生成にはライブラリが必要ですが、ここでは印刷機能で代替
    alert('PDFダウンロード機能は準備中です。「印刷する」ボタンからPDFとして保存してください。');
    window.print();
}

// 編集機能
function editPassport() {
    // 編集ページへ移動（データを保持したまま）
    window.location.href = '/services/health-passport-new.html?edit=true';
}

// データのエクスポート（JSON形式）
function exportData() {
    const savedData = localStorage.getItem('healthPassportData');
    if (savedData) {
        const data = JSON.parse(savedData);
        const dataStr = JSON.stringify(data, null, 2);
        const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
        
        const exportFileDefaultName = `health-passport-${data.childName}-${new Date().toISOString().split('T')[0]}.json`;
        
        const linkElement = document.createElement('a');
        linkElement.setAttribute('href', dataUri);
        linkElement.setAttribute('download', exportFileDefaultName);
        linkElement.click();
    }
}