import notFoundPage from '../images/notFoundPage.jpg';

const NotFoundPage = () => {
  return (
    <>
      <div style={{ padding: '40px', fontSize: '24px' }}>Page not found.</div>
      <img
        style={{ width: '400px', height: 'auto' }}
        src={notFoundPage}
        alt="Not Page"
      />
    </>
  );
};

export default NotFoundPage;
