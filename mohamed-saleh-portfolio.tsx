import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function Component() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold tracking-tight mb-2">MOHAMED SALEH</h1>
          <h2 className="text-2xl font-light text-gray-400 uppercase tracking-widest">Penetration Tester</h2>
          <div className="flex justify-center items-center space-x-4 mt-4">
            <a href="tel:+971502784388" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Phone className="w-4 h-4 mr-2" />
              +971 50 278 4388
            </a>
            <a href="mailto:mohamed73788@gmail.com" className="flex items-center text-gray-300 hover:text-white transition-colors">
              <Mail className="w-4 h-4 mr-2" />
              mohamed73788@gmail.com
            </a>
            <span className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-2" />
              Sharjah, UAE
            </span>
          </div>
        </header>

        <Card className="bg-gray-800 border-none shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Profile</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300">
              Ambitious cybersecurity professional with a strong academic background. Recently graduated from Zagazig
              University with a Bachelor's degree in Information Technology. Passionate about cybersecurity,
              particularly in penetration testing. Received training and certifications from esteemed institutions
              such as AASTMT, BUE, and INSTANT company. Eager to gain hands-on experience to further develop skills
              and contribute to enhancing information security.
            </p>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-none shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Experience & Certifications</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold mb-2">Cybersecurity (2023 - 2024)</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Certificate for Cybersecurity Diploma - AASTMT</li>
                <li>Certificate for Advanced Cybersecurity Diploma - AASTMT</li>
                <li>Certified and authenticated certificate for completion of cybersecurity training - BUE</li>
                <li>Certificate for Network Security from CISCO - Coursera</li>
                <li>Certificate for Cybersecurity Diploma - INSTANT Academy</li>
                <li>Training Certificates in Cybersecurity Penetration Testing - INSTANT Company</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Flutter Mobile App Development & Firebase (2022 - 2023)</h3>
              <p className="text-gray-300">Developed a mobile application and received an excellent grade in the graduation project.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Internet of Things (IoT) (2020 - 2021)</h3>
              <ul className="list-disc list-inside text-gray-300 space-y-1">
                <li>Certificate in Introduction to Internet of Things (IoT) from Cisco</li>
                <li>Certificate in IoT_Connecting Things from Cisco</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Web Design (2019 - 2020)</h3>
              <p className="text-gray-300">Certificate in Front End Web Development from Udacity</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">CCNA Router and Switching (2023)</h3>
              <p className="text-gray-300">Self-studied for the CCNA Router and Switching certification after graduation.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gray-800 border-none shadow-xl mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-semibold">Education</CardTitle>
          </CardHeader>
          <CardContent>
            <h3 className="text-xl font-semibold">Bachelor of Computers and Information</h3>
            <p className="text-gray-300">Zagazig University, Batch 2019-2023</p>
            <p className="text-gray-300">Department of Information Technology "IT"</p>
          </CardContent>
        </Card>

        <div className="flex justify-center space-x-4 mt-8">
          <Badge variant="outline" className="text-gray-300 hover:text-white transition-colors">
            Cybersecurity
          </Badge>
          <Badge variant="outline" className="text-gray-300 hover:text-white transition-colors">
            Penetration Testing
          </Badge>
          <Badge variant="outline" className="text-gray-300 hover:text-white transition-colors">
            Mobile Development
          </Badge>
          <Badge variant="outline" className="text-gray-300 hover:text-white transition-colors">
            IoT
          </Badge>
          <Badge variant="outline" className="text-gray-300 hover:text-white transition-colors">
            Web Development
          </Badge>
        </div>

        <footer className="text-center mt-12">
          <div className="flex justify-center space-x-4">
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
          </div>
        </footer>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap');

        body {
          font-family: 'Inter', sans-serif;
          background-color: #000;
          color: #fff;
        }
      `}</style>
    </div>
  )
}