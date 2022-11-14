"use client";

import { ChangeEvent, useState } from "react";

const markAsDone = (done: boolean) => {
  if (done) {
    fetch("/api/certify");
  }
};

export default function CourseCompletion() {
  const [sw, setSw] = useState(false);

  const toggle = (e: ChangeEvent) => {
    e.stopPropagation();
    setSw((s) => !s);
    markAsDone(!sw);
  };

  return (
    <>
      <label htmlFor="done">Done: </label>
      <input type="checkbox" checked={sw} onChange={toggle} id="done"></input>
      {sw && <div>Standing ovation!</div>}
    </>
  );
}
