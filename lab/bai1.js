function calculateBMI(weight, height) {
    // TODO: Sử dụng const cho các hằng số
    const BMI = weight / (height * height);
    
    // TODO: Phân loại BMI theo:
    let classification;
    const thieu_can = 18.5;
    const binh_thuong = 24.9;
    const thua_can = 29.9;
    
    if (BMI < thieu_can) {
        classification = "Thiếu cân";
    } else if (BMI >= thieu_can && BMI <= binh_thuong) {
        classification = "Bình thường";
    } else if (BMI >= 25 && BMI <= thua_can) {
        classification = "Thừa cân";
    } else {
        classification = "Béo phì";
    }
    
    return `BMI: ${BMI.toFixed(2)} - Phân loại: ${classification}`;
}

console.log(calculateBMI(60, 1.72));
