export async function getStaticProps() {

    const response = await fetch('/Data/shoes.json')
    const allData = response.json()
  
    return {
        props: { allData },
    }
  }