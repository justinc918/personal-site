const QA_ITEMS = [
  {
    question: 'What tools do you use?',
    answer: 'Procreate to sketch and draw in mostly everything, and Photoshop for coloring and tuning colors.',
  },
  {
    question: 'Is anything AI generated?',
    answer: 'No, and I have not used AI to create any of the pieces here. HOWEVER, I should disclose, I used it to generate the tesselating texture for the whiteboard, and for tuning the backgrounds of the whiteboard pieces to fit in.',
  }
]

export default function Digital() {
  return (
    <div style={pageStyle}>
      <div style={contentStyle}>
        <h1 style={titleStyle}>Q&amp;A</h1>
        <dl style={listStyle}>
          {QA_ITEMS.map(({ question, answer }) => (
            <div key={question} style={itemStyle}>
              <dt style={questionStyle}>{question}</dt>
              <dd style={answerStyle}>{answer || '…'}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}

const pageStyle: React.CSSProperties = {
  width: '100%',
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'auto',
  padding: '48px 32px',
}

const contentStyle: React.CSSProperties = {
  maxWidth: 640,
  width: '100%',
  textAlign: 'center',
}

const titleStyle: React.CSSProperties = {
  color: '#c4d3ff',
  fontSize: 28,
  fontWeight: 500,
  letterSpacing: '0.08em',
  textTransform: 'uppercase',
  marginBottom: 40,
}

const listStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  gap: 32,
  margin: 0,
}

const itemStyle: React.CSSProperties = {
  margin: 0,
}

const questionStyle: React.CSSProperties = {
  color: '#c4d3ff',
  fontSize: 18,
  fontWeight: 500,
  letterSpacing: '0.02em',
  marginBottom: 8,
}

const answerStyle: React.CSSProperties = {
  color: 'rgba(196,211,255,0.75)',
  fontSize: 16,
  lineHeight: 1.6,
  margin: 0,
}
