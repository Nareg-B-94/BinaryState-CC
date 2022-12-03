import './Details.css';

const Details = () => {
  return (
    <div>
      <h3>
        I didn't know what to improvise so I created links to my Portfolio and
        Github REACT projects that I just uploaded while i was honing my React
        Skills :)
      </h3>
      <ul>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://www.nareg-berberian.com/'
        >
          Portfolio
        </a>
      </ul>
      <ul>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/Nareg-B-94/CC-BinaryState-P1'
        >
          Project 1
        </a>
      </ul>
      <ul>
        <a
          target='_blank'
          rel='noreferrer'
          href='https://github.com/Nareg-B-94/CC-BinaryState-P2'
        >
          Project 2
        </a>
      </ul>
    </div>
  );
};

export default Details;
