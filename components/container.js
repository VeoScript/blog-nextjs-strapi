import Navigation from './navigation'

const Container = ({ children, categories }) => {
  return (
    <>
      <Navigation categories={categories} />
      {children}
    </>
  )
}

export default Container