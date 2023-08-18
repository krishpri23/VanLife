import React from "react";
import { useOutletContext } from "react-router-dom";

export default function HostVanInfo() {
  const { name, type, description } = useOutletContext();

  return (
    <section className="host-van-detail-info">
      <h4>
        Name: <span></span> {name}
      </h4>
      <h4>
        Category: <span>{type}</span>
      </h4>
      <h4>
        Description: <span> {description}</span>
      </h4>
      <h4>
        Visibility: <span>Public</span>{" "}
      </h4>
    </section>
  );
}
