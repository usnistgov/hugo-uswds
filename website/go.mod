module github.com/usnistgov/hugo-uswds/docs

go 1.21

toolchain go1.21.0

require (
	github.com/usnistgov/hugo-uswds v1.0.1-0.20230921190836-3c6b82fe7897 // indirect
	github.com/usnistgov/hugo-uswds-nist v0.0.0-20230921191202-abb701944c8d // indirect
)

// Serve theme directly from parent folder
replace github.com/usnistgov/hugo-uswds => ../
