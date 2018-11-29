# prep files steps

## file naming

Letter reports: ferl-lr-<Date>

Technical Reports: ferl-tr-<Report_Number>

Appendix: named after report plus appendix number, ferl-tr-<Report_Number>-appendix-<a>

Created file names using openrefine, including "original_filename" column and "filename" column with the new standardize filename. 
Using the columns filename and original_filename, renamed files using CSV import in Advanced Renamer, https://www.advancedrenamer.com/user_guide/csvimport

## Image derivatives

FERL images for item pages:
- thumbs 300px height, id + "_th.jpg"
- sm 800px height, id + "_sm.jpg" 

Create images from PDFs using ImageMagick ([setup instructions](https://evanwill.github.io/_drafts/notes/imagemagick.html)).
Set up folder with all PDFs with new filenames.
Create the small images:

`for f in *.pdf; do magick -density 500 "$f"[0] -resize 800x800 -flatten "small/${f%.pdf}_sm.jpg"; done`

Then `cd small`, and create thumbs from the smalls: 

`for f in *.jpg; do magick "$f" -resize x300 -flatten "../thumbs/${f%_sm.jpg}_th.jpg"; done`
