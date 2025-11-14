const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function Module() {
  return (
    <div id="wd-module">
      <h3>Module</h3>
      <hr />
      <h4>Retrieving Properties</h4>
      <a
        id="wd-module-name"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module/name`}
      >
        Get Module Name
      </a>
      <hr />
      <h4>Retrieving Objects</h4>
      <a
        id="wd-module"
        className="btn btn-primary"
        href={`${HTTP_SERVER}/lab5/module`}
      >
        Get Module
      </a>
      <hr />
    </div>
  );
}
