function ToolBar({customText}: {customText?: string}) {
  return <div>{customText || "ToolBar"}</div>;
}

export default ToolBar