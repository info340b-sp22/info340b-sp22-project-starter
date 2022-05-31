function GenRoute(props) {
    let view = props.view;
    let {cardAdd, viewName, name, director, link, img, alt, team} = props.plays;
console.log("123");

    return (
        <Route path={cardAdd} element={{view}[viewName] } />
    );
}