const findLocation = async () => {
    try {
        const dirText = await fetch(`./directions.html`);
        const dirText2 = await dirText.text();  

        let forward = 0;
        let depth = 0;

        for (let i=0; i < dirText2.length; i++) {
            if (isNaN(dirText2[i]) === false && dirText2[i-2] === "d") {
                forward += Number(dirText2[i]);
            } else if (isNaN(dirText2[i]) === false && dirText2[i-2] === "n") {
                depth += Number(dirText2[i]);
            } else if (isNaN(dirText2[i]) === false && dirText2[i-2] === "p") {
                depth -= Number(dirText2[i]);
            }
            console.log(depth, "depth", forward, "forward");
        };
        console.log(depth*forward);
    } catch (error) {
        console.log(error, "noooo!!!!")
    }
    };

    findLocation();