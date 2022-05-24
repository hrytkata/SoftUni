function vacation(groupCount, groupType, day) {
    let price = 0;

    switch (groupType) {
        case 'Students':
            if (day === 'Friday') {
                price = groupCount * 8.45;
            } else if (day === 'Saturday') {
                price = groupCount * 9.8;
            } else if (day === 'Sunday') {
                price = groupCount * 10.46;
            }
            if (groupCount >= 30) {
                price *= 0.85;
            } break;
        case 'Business':
            if (groupCount >= 100) {
                groupCount -= 10;
            } 
            if (day === 'Friday') {
                price = groupCount * 10.9;
            } else if (day === 'Saturday') {
                price = groupCount * 15.6;
            } else if (day === 'Sunday') {
                price = groupCount * 16;
            } break;
        case 'Regular':
            if (day === 'Friday') {
                price = groupCount * 15;
            } else if (day === 'Saturday') {
                price = groupCount * 20;
            } else if (day === 'Sunday') {
                price = groupCount * 22.5;
            }
            if (groupCount >= 10 && groupCount <= 20) {
                price *= 0.95;
            } break;
    
    }

    console.log(`Total price: ${price.toFixed(2)}`);
}
vacation(30, "Students", "Sunday");
vacation(40, "Regular", "Saturday");
vacation(105, "Business", "Saturday");