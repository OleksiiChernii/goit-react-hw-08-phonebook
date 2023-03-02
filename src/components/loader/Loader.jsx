import { FidgetSpinner } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <FidgetSpinner
      visible={true}
      height="80"
      width="80"
      ariaLabel="dna-loading"
      wrapperStyle={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
      }}
      wrapperClass="dna-wrapper"
      ballColors={['#ff0000', '#00ff00', '#0000ff']}
      backgroundColor="#F4442E"
    />
  );
};
