import React from 'react';

/*
 * CardGroup
 * This component takes Card components as children and renders them.
 * Example usage:
 *
 *      <CardGroup>
 *          <Card description="Trial" icon="fa-thumbs-o-up" price="Free!" />
 *      </CardGroup>
 *
 * The above would render a card group with a single child in it.
 *
 */

const Card = (props) => (
  
<div className="card cardGroup__card">
    <div className="card__description cardGroup__cardDescription">
        <div className={props.icon}/>
            <div className="card__descriptionText">
                {props.description}
                {props.hint && <br/>}{props.hint}
            </div>
        </div>

    <div className="card__price">{props.price}</div>

</div>
);

const CardGroup = (props) => (
    <div className="cardGroup">
        {props.children}
    </div>
);

const App = () => (
    <CardGroup>
        <Card description="Trial" icon="icon fa fa-thumbs-o-up card__descriptionIcon" price="Free!" />
        <Card description="Basic Tier" icon="con fa fa-trophy card__descriptionIcon" price="$10.00" hint="(most popular)" />
        <Card description="Advanced Tier" icon="icon fa fa-bolt card__descriptionIcon" price="$6,000" hint="(only for enterprise-level professionals)"/>
    </CardGroup>
);

export default App;
