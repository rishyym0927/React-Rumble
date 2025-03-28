function SkeletonLoading({ shape = 'text', width = '100%', height = '1em' }) {
    const style = {
      width,
      height,
      backgroundColor: '#ccc',
      borderRadius: '4px',
      margin: '0.5em 0',
      animation: 'pulse 1.5s infinite',
    };
  
    return <div style={style} />;
  }
  
  export default SkeletonLoading;
  