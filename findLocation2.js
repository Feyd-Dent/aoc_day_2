const findLocation = async () => {
    try {
        const dirText = await fetch(`./directions.html`);
        const dirText2 = await dirText.text();  

        let forward = 0;
        let depth = 0;
        let aim = 0;

        for (let i=0; i < dirText2.length; i++) {
            if (isNaN(dirText2[i]) === false && dirText2[i-2] === "d") {
                //forward
                forward += Number(dirText2[i]);
                if (aim > 0 || aim < 0) {
                    depth += (Number(dirText2[i])*aim); 
                }
            } else if (isNaN(dirText2[i]) === false && dirText2[i-2] === "n") {
                //down
                aim += Number(dirText2[i]);
            } else if (isNaN(dirText2[i]) === false && dirText2[i-2] === "p") {
                //up
                aim -= Number(dirText2[i]);
            }
            console.log(aim, "aim",depth, "depth", forward, "forward");
        };
        console.log(depth*forward);
    } catch (error) {
        console.log(error, "noooo!!!!")
    }
    };

    findLocation();