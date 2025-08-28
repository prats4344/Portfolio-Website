          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.name}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1fYG_iVZqC32aDQhU69CtyudyhwotwhQe/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <Button variant="outline" size="sm">
                Download CV
              </Button>
            </a>
          </div>

          {/* Mobile Navigation Toggle */}
          ...
          {/* Mobile Navigation Menu */}
          {isOpen && (
            <div className="md:hidden mt-4 pb-4">
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="https://drive.google.com/file/d/1fYG_iVZqC32aDQhU69CtyudyhwotwhQe/view?usp=drive_link"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block self-start"
                >
                  <Button variant="outline" size="sm">
                    Download CV
                  </Button>
                </a>
              </div>
            </div>
          )}
