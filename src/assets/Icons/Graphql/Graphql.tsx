interface Props extends React.SVGProps<SVGSVGElement> {}

const Graphql: React.FC<Props> = (props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width={24}
      height={24}
      viewBox='0 0 50 50'
      fill='none'
      {...props}
    >
      <path
        fill='#E535AB'
        fillRule='evenodd'
        d='m29.256 5.73 10.281 5.936a4.49 4.49 0 0 1 1.011-.8 4.466 4.466 0 0 1 6.09 1.634 4.466 4.466 0 0 1-1.633 6.09c-.381.22-.78.376-1.188.473V30.94a4.47 4.47 0 0 1 1.175.47 4.444 4.444 0 0 1 1.634 6.09c-1.226 2.132-3.958 2.86-6.09 1.634a4.428 4.428 0 0 1-1.102-.894l-10.219 5.9a4.461 4.461 0 0 1-4.23 5.86 4.452 4.452 0 0 1-4.457-4.456c0-.438.063-.861.18-1.26L10.43 38.348c-.287.3-.62.566-.997.785-2.146 1.226-4.865.498-6.09-1.634a4.466 4.466 0 0 1 1.633-6.09 4.47 4.47 0 0 1 1.175-.47V19.063a4.467 4.467 0 0 1-1.187-.473c-2.133-1.225-2.86-3.958-1.635-6.09 1.226-2.132 3.958-2.86 6.09-1.634.382.221.719.49 1.007.795L20.71 5.723a4.47 4.47 0 0 1-.182-1.267A4.452 4.452 0 0 1 24.984 0a4.452 4.452 0 0 1 4.456 4.456c0 .443-.064.87-.184 1.274Zm-1.071 1.829 10.305 5.95a4.45 4.45 0 0 0 3.208 5.544v11.891c-.058.014-.116.03-.173.046L28.065 7.678l.12-.12Zm-6.28.121L8.447 30.993a4.435 4.435 0 0 0-.175-.048V19.053a4.45 4.45 0 0 0 3.205-5.55l10.303-5.95c.041.044.084.086.127.127Zm4.324 1.056 13.457 23.307a4.467 4.467 0 0 0-1.254 2.175H11.537a4.473 4.473 0 0 0-.47-1.174 4.49 4.49 0 0 0-.783-.995L23.743 8.738a4.47 4.47 0 0 0 2.486-.002Zm2.05 33.806 10.24-5.912a4.432 4.432 0 0 1-.083-.292H11.531a4.47 4.47 0 0 1-.046.172l10.289 5.941a4.443 4.443 0 0 1 3.21-1.363c1.307 0 2.481.56 3.295 1.454Z'
        clipRule='evenodd'
      />
    </svg>
  );
};

export default Graphql;