
export class NodeIdentifier {

    static bitStreamFn = (bitStreamArr: any) => {
        let node: any = {}
        bitStreamArr.forEach((element: any, index: number, array: any) => {
            let bitStream = element.toString()
            for (let i = 0; i < bitStream.length; i++) {
                if (index == 0) {
                    if (bitStream.charAt(i) == 1) {
                        node[i] = "Green"
                    } else {
                        node[i] = "Red"
                    }
                }
                else if (index == (array.length - 1)) {
                    if (bitStream.charAt(i) == 0) {
                        node[i] = "Red"
                    }
                }
                else {
                    if (node[i] == "Green" && bitStream.charAt(i) == 1) {
                        node[i] = "Green"
                    }
                    else if (node[i] == "Green" && bitStream.charAt(i) == 0) {
                        node[i] = "Orange"
                    }
                    else if (node[i] == "Red" && bitStream.charAt(i) == 1) {
                        node[i] = "Orange"
                    }
                }

            }

        });
        return node;

    }

}