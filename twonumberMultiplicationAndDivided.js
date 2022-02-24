// 2 ta input nite hobe. First er input ta emon kono number er shate  gun korte hobe. Tarpor shate result jno 2nd input diya vag jay. Jar shate gun dilam sheta jno minimum hoy .

const divided = (x, y = 1) => {
    for (let i = 1; i <= y; i++) {
        if ((x * i) % y === 0) {
            return i;
        }

    }
}

const result = divided(6, 8);
console.log(result);