/* src/styles/palette.css手写是很麻烦的，这里直接根据规则用代码生成 */

const colorDefs = [
    {
        color: 'red',
        defR: '255',
        defG: '0',
        defB: '0',
    },
    {
        color: 'pink',
        defR: '255',
        defG: '192',
        defB: '203',
    },
    {
        color: 'light-purple',
        defR: '230',
        defG: '91',
        defB: '217',
    },
    {
        color: 'purple',
        defR: '128',
        defG: '0',
        defB: '128',
    },
    {
        color: 'deep-purple',
        defR: '103',
        defG: '58',
        defB: '102',
    },
    {
        color: 'indigo',
        defR: '75',
        defG: '0',
        defB: '130',
    },
    {
        color: 'blue',
        defR: '0',
        defG: '0',
        defB: '255',
    },
    {
        color: 'light-blue',
        defR: '3',
        defG: '168',
        defB: '243',
    },
    {
        color: 'sky-blue',
        defR: '135',
        defG: '206',
        defB: '250',
    },
    {
        color: 'cyan',
        defR: '0',
        defG: '255',
        defB: '255',
    },
    {
        color: 'teal',
        defR: '0',
        defG: '128',
        defB: '128',
    },
    {
        color: 'green',
        defR: '0',
        defG: '128',
        defB: '0',
    },
    {
        color: 'light-green',
        defR: '138',
        defG: '194',
        defB: '74',
    },
    {
        color: 'lime',
        defR: '0',
        defG: '255',
        defB: '0',
    },
    {
        color: 'yellow',
        defR: '255',
        defG: '255',
        defB: '0',
    },
    {
        color: 'amber',
        defR: '254',
        defG: '192',
        defB: '7',
    },
    {
        color: 'orange',
        defR: '255',
        defG: '165',
        defB: '0',
    },
    {
        color: 'deep-orange',
        defR: '254',
        defG: '87',
        defB: '34',
    },
    {
        color: 'brown',
        defR: '165',
        defG: '42',
        defB: '42',
    },
    {
        color: 'light-gray',
        defR: '203',
        defG: '203',
        defB: '203',
    },
    {
        color: 'gray',
        defR: '128',
        defG: '128',
        defB: '128',
    },
    {
        color: 'blue-gray',
        defR: '96',
        defG: '125',
        defB: '138',
    },
    {
        color: 'white',
        defR: '255',
        defG: '255',
        defB: '255',
    },
    {
        color: 'black',
        defR: '0',
        defG: '0',
        defB: '0',
    },
];

let fs = require("fs");
console.log('generating palette css...');

let result = '';
function gen(code) {
    if (!code) code = '';
    result += code + '\n';
}

function calcShadow(def) {
    const g = parseInt(def.defR) * 0.299 + parseInt(def.defG) * 0.587 + parseInt(def.defB) + 0.114;
    return g > 168 ? ['168', '168', '168'] : [def.defR, def.defG, def.defB];
}

// none bg
gen('/* none bg */');
gen('.si-bg-none {');
gen('\t--bg-color: rgba(0, 0, 0, 0);');
gen('\t--border-color: rgba(0, 0, 0, 0);');
gen('\t--box-shadow-color: rgba(168, 168, 168, .45);');
gen('\t--bg-hover-color: rgba(0, 0, 0, 0);');
gen('\t--bg-active-color: rgba(0, 0, 0, 0);');
gen('}');
gen('/* none bg END */');
gen();

// bg
gen('/* bg */');
colorDefs.map((c) => {
    gen(`.si-bg-${c.color} {`);
    gen(`\t--bg-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, 1);`);
    gen(`\t--border-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, 1);`);
    const g = calcShadow(c);
    gen(`\t--box-shadow-color: rgba(${g[0]}, ${g[1]}, ${g[2]}, 1);`);
    gen(`\t--bg-hover-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .85);`);
    gen(`\t--bg-active-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .95);`);
    gen('}');
});
gen('/* bg END */');
gen();

// bg-lighten-1
gen('/* bg-lighten-1 */');
colorDefs.map((c) => {
    gen(`.si-bg-${c.color}-lighten-1 {`);
    gen(`\t--bg-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .95);`);
    const g = calcShadow(c);
    gen(`\t--border-color: rgba(${g[0]}, ${g[1]}, ${g[2]}, .95);`);
    gen(`\t--box-shadow-color: rgba(${g[0]}, ${g[1]}, ${g[2]}, .95);`);
    gen(`\t--bg-hover-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .85);`);
    gen(`\t--bg-active-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .65);`);
    gen('}');
});
gen('/* bg-lighten-1 END */');
gen();

// bg-lighten-2
gen('/* bg-lighten-2 */');
colorDefs.map((c) => {
    gen(`.si-bg-${c.color}-lighten-2 {`);
    gen(`\t--bg-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .85);`);
    const g = calcShadow(c);
    gen(`\t--border-color: rgba(${g[0]}, ${g[1]}, ${g[2]}, .85);`);
    gen(`\t--box-shadow-color: rgba(${g[0]}, ${g[1]}, ${g[2]}, .85);`);
    gen(`\t--bg-hover-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .65);`);
    gen(`\t--bg-active-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .45);`);
    gen('}');
});
gen('/* bg-lighten-2 END */');
gen();

// bg-lighten-3
gen('/* bg-lighten-3 */');
colorDefs.map((c) => {
    gen(`.si-bg-${c.color}-lighten-3 {`);
    gen(`\t--bg-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .65);`);
    const g = calcShadow(c);
    gen(`\t--border-color: rgba(${g[0]}, ${g[1]}, ${g[2]}, .65);`);
    gen(`\t--box-shadow-color: rgba(${g[0]}, ${g[1]}, ${g[2]}, .65);`);
    gen(`\t--bg-hover-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .95);`);
    gen(`\t--bg-active-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .85);`);
    gen('}');
});
gen('/* bg-lighten-3 END */');
gen();

// bg-lighten-4
gen('/* bg-lighten-4 */');
colorDefs.map((c) => {
    gen(`.si-bg-${c.color}-lighten-4 {`);
    gen(`\t--bg-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .45);`);
    const g = calcShadow(c);
    gen(`\t--border-color: rgba(${g[0]}, ${g[1]}, ${g[2]}, .45);`);
    gen(`\t--box-shadow-color: rgba(${g[0]}, ${g[1]}, ${g[2]}, .45);`);
    gen(`\t--bg-hover-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .85);`);
    gen(`\t--bg-active-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .65);`);
    gen('}');
});
gen('/* bg-lighten-4 END */');
gen();

// fg
gen('/* fg */');
colorDefs.map((c) => {
    gen(`.si-fg-${c.color} {`);
    gen(`\t--fg-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, 1);`);
    gen(`\t--fg-hover-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .85);`);
    gen(`\t--fg-active-color: rgba(${c.defR}, ${c.defG}, ${c.defB}, .95);`);
    gen('}');
});
gen('/* fg END */');

fs.writeFile("palette.css", result, "utf8", function (err) {
    if (err) throw err;
    console.log("codegen finished > palette.css");
});
