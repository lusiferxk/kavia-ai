// src/components/test/CircleTest.tsx
export function CircleTest() {
    return (
      <div 
        style={{
          position: 'absolute',
          width: '647.09px',
          height: '950px',
          left: '245px',
          top: '607px',
          transform: 'rotate(-90deg)',
          transformOrigin: 'top left',
          border: '2px solid red', // For testing visibility
        }}
      >
        <div 
          style={{
            position: 'absolute',
            width: '647.09px',
            height: '647.09px',
            left: '302.91px',
            top: '0px',
            transform: 'rotate(-90deg)',
            transformOrigin: 'top left',
            borderRadius: '50%',
            border: '1px solid red',
          }}
        />
           <div 
          style={{
            position: 'absolute',
            width: '647.09px',
            height: '647.09px',
            left: '302.91px',
            top: '0px',
            transform: 'rotate(-90deg)',
            transformOrigin: 'top left',
            borderRadius: '50%',
            border: '1px solid red',
          }}
        />
        
      </div>
    )
  }