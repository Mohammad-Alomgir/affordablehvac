export default function QuoteSection() {
  return (
    <>
      <style>
        {`
          .quote-iframe{
            width:100%;
            height:700px;
            border:none;
            display:block;
          }

          @media (max-width: 768px){
            .quote-iframe{
              height:1450px;
            }
          }
        `}
      </style>

      <section id="quote">
        <iframe
          src="https://wizardcleaning.ca/eaaffordableform.php"
          title="Estimate Form"
          className="quote-iframe"
        />
      </section>
    </>
  );
}