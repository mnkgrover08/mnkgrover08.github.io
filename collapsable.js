
    function generateTreeData() {
        // Generate 200 nodes in a multi-hierarchical parent-child relation
        const nodes = [];
        const img_pool = ["./lana.png", "./malory.png", "./figgs.png", "./woodhouse.png", "./cheryl.png", "./pam.png"]

        for (let i = 1; i <= 5; i++) {
            var random = Math.floor(Math.random() * img_pool.length);
            const parentNode = {
                id: `node${i}`,
                label: `Node ${i}`,
                //image: img_pool[random],
                text: { name: "1st level node" },
                collapsed: true,
                children: [],
            };
            for (let j = 1; j <= 3; j++) {
                var random = Math.floor(Math.random() * img_pool.length);
                const childNode = {
                    id: `node${i}-${j}`,
                    label: `Node ${i}-${j}`,
                    //image: img_pool[random],
                    text: { name: "2nd level node" },
                    collapsed: true,
                    children: [],
                };
                for (let k = 1; k <= 3; k++) {
                    var random = Math.floor(Math.random() * img_pool.length);
                    const grandChildNode = {
                        id: `node${i}-${j}-${k}`,
                        label: `Node ${i}-${j}-${k}`,
                        //image: img_pool[random],
                        text: { name: "3rd level node" },
                        collapsed: true,
                        children: []
                    };
                    for (let l = 1; l <= 3; l++) {
                        const greatgrandChildNode = {
                            id: `node${i}-${j}-${k}-${l}`,
                            label: `Node ${i}-${j}-${k}-${l}`,
                            //image: img_pool[random],
                            text: { name: "4th level node" },
                            collapsed: true,
                            children: []
                        };
                        for (let m = 1; m <= 3; m++) {
                            const greatgreatgrandChildNode = {
                                id: `node${i}-${j}-${k}-${l}-${m}`,
                                label: `Node ${i}-${j}-${k}-${l}-${m}`,
                                //image: img_pool[random],
                                text: { name: "5th level node" },
                                collapsed: true,
                                children: []
                            };
                            greatgrandChildNode.children.push(greatgreatgrandChildNode);
                        }
                        grandChildNode.children.push(greatgrandChildNode);  
                    }
                    childNode.children.push(grandChildNode);
                }
                parentNode.children.push(childNode);
            }
            nodes.push(parentNode);
        }
        return nodes;
    }

    const data = generateTreeData();
    console.log(data);

    var chart_config = {
        chart: {
            container: "#collapsable-example",

            animateOnInit: true,
            
            node: {
                collapsable: true
            },
            animation: {
                nodeAnimation: "easeOutCubic",
                nodeSpeed: 700,
                //connectorsAnimation: "slide",
                connectorsSpeed: 700
            },
            connectors: {
                type: "step"
            },
            levelSeparation: 100,
            siblingSeparation: 100,
            subTeeSeparation: 100,
            padding: 30
        },
        nodeStructure: {
            text: { name: "Parent node" },
            //image: "./malory.png",
            children: data,
        }
    };

/* Array approach
    var config = {
        container: "#collapsable-example",

        animateOnInit: true,
        
        node: {
            collapsable: true
        },
        animation: {
            nodeAnimation: "easeOutBounce",
            nodeSpeed: 700,
            connectorsAnimation: "bounce",
            connectorsSpeed: 700
        }
    },
    malory = {
        image: "img/malory.png"
    },

    lana = {
        parent: malory,
        image: "img/lana.png"
    }

    figgs = {
        parent: lana,
        image: "img/figgs.png"
    }

    sterling = {
        parent: malory,
        childrenDropLevel: 1,
        image: "img/sterling.png"
    },

    woodhouse = {
        parent: sterling,
        image: "img/woodhouse.png"
    },

    pseudo = {
        parent: malory,
        pseudo: true
    },

    cheryl = {
        parent: pseudo,
        image: "img/cheryl.png"
    },

    pam = {
        parent: pseudo,
        image: "img/pam.png"
    },

    chart_config = [config, malory, lana, figgs, sterling, woodhouse, pseudo, pam, cheryl];

*/