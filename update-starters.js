import fs from 'fs';

let html = fs.readFileSync('index.html', 'utf8');

html = html.replace(
    /<article class="menu-item reveal" data-category="starters">\s*<div class="menu-img" style="background-image: url\('https:\/\/www\.spiceupthecurry\.com\/wp-content\/uploads\/2022\/03\/pani-puri-recipe-2\.jpg'\);"><\/div>\s*<div class="menu-row">\s*<h4 class="menu-name">Pani Puri\(5\) <\/h4>\s*<div class="menu-dots"><\/div>\s*<span class="menu-price">₹60<\/span>\s*<\/div>\s*<p class="menu-desc">Himalayan morels carefully stuffed with herbed paneer, finished in the clay oven\.<\/p>\s*<div class="menu-tags">\s*<span class="tag tag-veg">Vegetarian<\/span>\s*<\/div>\s*<\/article>/g,
    `<article class="menu-item reveal" data-category="starters">
                    <div class="menu-img" style="background-image: url('https://www.spiceupthecurry.com/wp-content/uploads/2022/03/pani-puri-recipe-2.jpg');"></div>
                    <div class="menu-row">
                        <h4 class="menu-name">Pani Puri (5)</h4>
                        <div class="menu-dots"></div>
                        <span class="menu-price">₹60</span>
                    </div>
                    <p class="menu-desc">Crispy hollow puris filled with tangy, spicy mint water and a sweet tamarind chutney.</p>
                    <div class="menu-tags">
                        <span class="tag tag-veg">Vegetarian</span>
                    </div>
                </article>`
);

html = html.replace(
    /<article class="menu-item reveal" data-category="starters">\s*<div class="menu-img" style="background-image: url\('https:\/\/www\.spiceupthecurry\.com\/wp-content\/uploads\/2016\/10\/Samosa-recipe-1-1\.jpg'\);"><\/div>\s*<div class="menu-row">\s*<h4 class="menu-name"> Samosa<\/h4>\s*<div class="menu-dots"><\/div>\s*<span class="menu-price">₹450<\/span>\s*<\/div>\s*<p class="menu-desc">Succulent chicken morsels heavily infused with saffron paste and black cardamom\.<\/p>\s*<div class="menu-tags">\s*<span class="tag tag-spicy">Spicy<\/span>\s*<\/div>\s*<\/article>/g,
    `<article class="menu-item reveal" data-category="starters">
                    <div class="menu-img" style="background-image: url('https://www.spiceupthecurry.com/wp-content/uploads/2016/10/Samosa-recipe-1-1.jpg');"></div>
                    <div class="menu-row">
                        <h4 class="menu-name">Samosa (2)</h4>
                        <div class="menu-dots"></div>
                        <span class="menu-price">₹80</span>
                    </div>
                    <p class="menu-desc">Golden crisp pastry filled with warmly spiced potatoes and green peas, served with chutneys.</p>
                    <div class="menu-tags">
                        <span class="tag tag-veg">Vegetarian</span>
                    </div>
                </article>`
);

html = html.replace(
    /<article class="menu-item reveal" data-category="starters">\s*<div class="menu-img" style="background-image: url\('https:\/\/savorytales\.com\/galouti-kebab-recipe-or-mutton-galouti-kebab\/'\);"><\/div>\s*<div class="menu-row">\s*<h4 class="menu-name">Galouti Kebab<\/h4>\s*<div class="menu-dots"><\/div>\s*<span class="menu-price">₹550<\/span>\s*<\/div>\s*<p class="menu-desc">Finely ground lamb with over 150 spices, a storied legacy of the Nawab of Lucknow\.<\/p>\s*<div class="menu-tags">\s*<span class="tag tag-chef">Chef's Pick<\/span>\s*<\/div>\s*<\/article>/g,
    `<article class="menu-item reveal" data-category="starters">
                    <div class="menu-img" style="background-image: url('https://thefoodietales.com/wp-content/uploads/2019/04/galouti-kebab-1.jpg');"></div>
                    <div class="menu-row">
                        <h4 class="menu-name">Galouti Kebab</h4>
                        <div class="menu-dots"></div>
                        <span class="menu-price">₹550</span>
                    </div>
                    <p class="menu-desc">Finely ground lamb with over 150 spices, a storied legacy of the Nawab of Lucknow, melting in the mouth.</p>
                    <div class="menu-tags">
                        <span class="tag tag-chef">Chef's Pick</span>
                    </div>
                </article>`
);

html = html.replace(
    /<article class="menu-item reveal" data-category="starters">\s*<div class="menu-img" style="background-image: url\('https:\/\/encrypted-tbn0\.gstatic\.com\/images\?q=tbn:ANd9GcQohR6W_sxaYgcPltmkPEG-DP3E4Pb6yAyRCwCScei3L7YMOA83KpFt7krpDr8LXgNBJXp0tWjV2UY2mceloLgXtaFzm4HUmFtAGUVpcg&s=10'\);"><\/div>\s*<div class="menu-row">\s*<h4 class="menu-name">Tandoori Chicken<\/h4>\s*<div class="menu-dots"><\/div>\s*<span class="menu-price">₹650<\/span>\s*<\/div>\s*<p class="menu-desc">River sole cutlets bathed in a pungent carom seed and hung curd marinade, smoked gently\.<\/p>\s*<div class="menu-tags">\s*<span class="tag tag-spicy">Spicy<\/span>\s*<\/div>\s*<\/article>/g,
    `<article class="menu-item reveal" data-category="starters">
                    <div class="menu-img" style="background-image: url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQohR6W_sxaYgcPltmkPEG-DP3E4Pb6yAyRCwCScei3L7YMOA83KpFt7krpDr8LXgNBJXp0tWjV2UY2mceloLgXtaFzm4HUmFtAGUVpcg&s=10');"></div>
                    <div class="menu-row">
                        <h4 class="menu-name">Tandoori Chicken</h4>
                        <div class="menu-dots"></div>
                        <span class="menu-price">₹450</span>
                    </div>
                    <p class="menu-desc">Classic bone-in chicken marinated in yogurt and traditional spices, roasted in the tandoor.</p>
                    <div class="menu-tags">
                        <span class="tag tag-spicy">Spicy</span>
                    </div>
                </article>`
);


fs.writeFileSync('index.html', html);
console.log('Starters updated');
