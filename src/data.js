import letters from './images/3d-letters.png';
import digital from './images/digital-materiality.png';
import poster from './images/korean-poster.png';
import question from './images/subquestion1.png';
import scan from './images/scan.jpeg';
import bookCovers from './images/book-covers.png';
import circuit from './images/closeupcircuit.jpg';
import book from './images/p1book.png';
import texture from './images/texture2.jpg';
import scroll from './images/scroll.png';
import flipbook from './images/play-flipbook.jpg';
import font from './images/exran-font.png';
import specimen from './images/specimen-combined.png';
import popup from './images/type-popup.png';
import backCover from './images/back-cover.png';
import books from './images/books.png';
import covers from './images/covers.png';
import leftFlap from './images/left-flap.png';
import rightFlap from './images/right-flap.png';
import logoCloseup from './images/logo-closeup.png';
import logoBlack from './images/logo-black.png';
import drawing from './images/drawing.png';
import jersey from './images/jersey.png';
import poster1 from './images/poster1.jpg';

const data = [
  {
    id: 1,
    title: 'Analog » Digital, Undergraduate Thesis 2023-24',
    image: bookCovers,
    subPages: [
      {
        image: letters,
        caption:
          'Rendered three-dimensional typography, procedural texturing, Blender',
      },
      {
        image: texture,
        caption:
          'Printed three-dimensional typographic form attempting to find materiality in things brought from digital to analog, 3" x 4", translucent resin.',
      },
      {
        image: digital,
        caption:
          'Digital Materiality—exaggerating realistic 3D textures to create materiality unique to digital artifacts.',
      },
      {
        image: bookCovers,
        caption:
          'Thesis Process Book, 6" x 9", Letraset on silver corrugated paper cover, book printed in RISO on 60 lb text Lettermark gray & cream paper + 70 lb text Husky paper.',
      },
      {
        image: circuit,
        caption: 'Closeup shot of Letraset type on circuit board.',
      },
      {
        image: question,
        caption:
          'Three-poster series—forms created from Letrasetting on a circuit board, breaker box, and projector lamp, 11" x 17", double-sided, 1000H Clearprint vellum.',
        vertical: true,
      },
      {
        image: book,
        caption: 'Reconfigurable Type A—Z, bound, 8" x 5", Astrobright papers.',
        vertical: true,
      },
      {
        image: poster1,
        caption:
          'Reconfigurable Type A—Z, unbound and used to create poster layouts, 8" x 5", Astrobright papers.',
      },
      {
        image: flipbook,
        caption:
          'Experimental flipbook made from forms created using found objects + lights + shadows.',
      },
      {
        image: scan,
        caption:
          'Redesigned poster for annual Science Olympiad event using ice and water distortions, 11" x 17", fluorescent pink and orange RISO on warm white paper.',
        vertical: true,
      },
      {
        image: poster,
        caption:
          'Redesigned poster for a collaborative typographic exhibit between Hongik University and OCAD, 11" x 17", white and gold RISO on Canson black paper.',
        vertical: true,
      },
      {
        image: scroll,
        caption:
          'Duo scroll posters based on stickers found throughout Chinatown, forms made from play with styrofoam, 11" x 51", RISO on rice paper.',
      },
    ],
  },
  {
    id: 2,
    title: 'Stephen King Cover Series, Book Jackets 2022',
    image: books,
    subPages: [
      {
        image: backCover,
        caption: 'Back cover, 6.5" x 9.5"',
      },
      {
        image: books,
        caption: 'Covers, stacked, 6.5" x 9.5".',
      },
      {
        image: covers,
        caption:
          'Covers—forms created with cutouts casting shadows, 6.5" x 9.5".',
      },
      {
        image: leftFlap,
        caption: 'Inside flap of cover, 3.5" x 9.5".',
      },
      {
        image: rightFlap,
        caption: 'Inside flap of cover, 3.5" x 9.5".',
      },
    ],
  },
  {
    id: 3,
    title: 'Exran sans, Typeface 2022-ongoing',
    image: popup,
    subPages: [
      {
        image: font,
        caption: 'Sans serif work-in-progress display typeface.',
      },
      {
        image: specimen,
        caption: 'Type specimen, showcasing anatomy and usage.',
      },
      {
        image: popup,
        caption: 'Working download file, with EULA.',
      },
    ],
  },
  {
    id: 4,
    title: 'Arctic eSports, Branding 2020',
    image: logoCloseup,
    subPages: [
      {
        image: logoCloseup,
        caption: 'Wolf mascot closeup.',
      },
      {
        image: logoBlack,
        caption: 'Full mascot logo.',
      },
      {
        image: drawing,
        caption: 'Initial concept sketches.',
      },
      {
        image: jersey,
        caption: 'Team jersey mockups',
      },
    ],
  },
];

export default data;
