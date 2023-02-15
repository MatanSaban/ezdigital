export const RenderHTML = (text) => {
    const htmlPart = text;
    return <span dangerouslySetInnerHTML={{ __html: htmlPart }} />;
};

export const getHeritage = (page, apiPages) => {
    let heritage = null;
    if (page?.parent) {
        apiPages?.forEach((grandParentItem) => {
            if (grandParentItem.id === page.parent) {
                console.log('here 1');
                heritage = {parent:grandParentItem}
            } else {
                if (grandParentItem?.children) {
                    grandParentItem?.children?.forEach((parentItem) => {
                        if (parentItem.id === page.parent) {
                            console.log('here 2');
                            // setGrandParent(grandParentItem)
                            // setParent(parentItem);
                            heritage = {grandParent: grandParentItem, parent: parentItem}
                        } else {
                            if (parentItem?.children) {
                                parentItem?.children?.forEach((grandChildItem) => {
                                    if (grandChildItem.id === page.parent) {
                                        console.log('here 3');
                                        setGrandParent(parentItem)
                                        setParent(grandChildItem);
                                        heritage = {grandParent: parentItem, parent: grandChildItem}
                                    }
                                })
                            }
                        }
                    })
                }
            }
        })
    }
    return heritage;
}