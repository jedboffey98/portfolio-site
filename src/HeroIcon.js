import React from "react";
import * as icons from "@heroicons/react/outline";
import { XCircleIcon } from "@heroicons/react/outline";

const Component = (props) => {
  const Icon = icons[props.iconName];

  if (!Icon) {
    return <XCircleIcon />;
  }

  return (
    <div>
      <Icon class="object-fit" />
    </div>
  );
};

function HeroIcon(props) {
  return <Component iconName={props.iconName} />;
}

export default HeroIcon;
