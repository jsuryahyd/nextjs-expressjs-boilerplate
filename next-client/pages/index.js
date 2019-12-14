export const config = {amp:"hybrid"}
export default function() {
  return (
    <>
      <div className="container">Website Home</div>
      <style jsx>
        {`
          .container {
            padding: 40px;
            text-align: center;
          }
        `}
      </style>
      <style global jsx>
        {`
          html,body {
            font-family: Helvetica,Roboto;
          }
        `}
      </style>
    </>
  );
}
