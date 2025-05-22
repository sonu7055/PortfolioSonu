function Footer() {
  return (
    <footer className="bg-gray-100 py-6 mt-12 border-t border-gray-200">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <p className="text-sm text-gray-600">Made with ❤️ by Sonu. All rights reserved.</p>
        
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a href="#" target="_blank" className="text-gray-600 hover:text-purple-600 transition">
            <i className="fab fa-github"></i> GitHub
          </a>
          <a href="#" target="_blank" r className="text-gray-600 hover:text-purple-600 transition">
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a href="#" className="text-gray-600 hover:text-purple-600 transition">
            <i className="fas fa-envelope"></i> Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
