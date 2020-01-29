import React, { useState } from 'react';
import { List, Button } from './styles';

function ItemsBar({ items, setLocation }) {
    const [active, setActive] = useState(1);

    return (
        <List>
            {items.map((location, idx) => (
                <li key={location.id}>
                    <Button
                        active={active === location.id}
                        onClick={() => {
                            setLocation({ woeid: location.woeid, title: location.title });
                            setActive(idx + 1)
                        }}>
                        {location.title}
                    </Button>
                </li>
            ))}
        </List>
    )
}

export default ItemsBar;