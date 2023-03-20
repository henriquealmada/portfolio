import ContactForm from '../../components/contact/ContactForm'
import Heading from '../ui/Heading'

const Contact = () => {
  return (
    <section className="py-[8rem] px-4">
      <div className="max-w-[1400px] mx-auto">
        <Heading text={'contato'} />
        <ContactForm />
      </div>
    </section>
  )
}

export default Contact
