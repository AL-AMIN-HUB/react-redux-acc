import React from "react";
import List from "./List";

const Lists = () => {
  const items: string[] = ["Al Amin", "Moriom", "Foysal"];
  const onClick = (name: string): void => alert(name);
  return (
    <div>
      <List items={items} onClick={onClick}></List>
    </div>
  );
};

export default Lists;
