#!/usr/bin/env python3
"""
Keyword Frequency Analysis for Rizza Classic Website
Analyzes Italian and English keywords across all text content
"""

import re
import json
from collections import Counter, defaultdict
from typing import Dict, List, Tuple

class KeywordAnalyzer:
    def __init__(self):
        self.italian_keywords = Counter()
        self.english_keywords = Counter()
        self.keyword_locations = defaultdict(list)
        
        # Common stop words to exclude
        self.italian_stopwords = {
            'il', 'la', 'lo', 'gli', 'le', 'un', 'una', 'uno', 'del', 'della', 'dello', 'degli', 'delle',
            'al', 'alla', 'allo', 'ai', 'alle', 'dal', 'dalla', 'dallo', 'dai', 'dalle', 'nel', 'nella',
            'nello', 'nei', 'nelle', 'sul', 'sulla', 'sullo', 'sui', 'sulle', 'per', 'tra', 'fra',
            'con', 'su', 'in', 'di', 'a', 'da', 'come', 'più', 'molto', 'tanto', 'poco', 'tutto',
            'tutti', 'tutte', 'questa', 'questo', 'questi', 'queste', 'quello', 'quella', 'quelli',
            'quelle', 'che', 'chi', 'cui', 'dove', 'quando', 'come', 'perché', 'se', 'ma', 'però',
            'anche', 'ancora', 'già', 'sempre', 'mai', 'oggi', 'ieri', 'domani', 'qui', 'qua', 'là',
            'lì', 'sopra', 'sotto', 'dentro', 'fuori', 'davanti', 'dietro', 'prima', 'dopo', 'durante',
            'mentre', 'fino', 'verso', 'oltre', 'attraverso', 'mediante', 'secondo', 'presso', 'circa',
            'senza', 'tranne', 'eccetto', 'salvo', 'invece', 'inoltre', 'tuttavia', 'comunque', 'quindi',
            'infatti', 'cioè', 'ossia', 'ovvero', 'sia', 'oppure', 'o', 'e', 'ed', 'ma', 'però', 'anzi',
            'bensì', 'nemmeno', 'neanche', 'neppure', 'è', 'sono', 'siamo', 'sei', 'siete', 'era', 'ero',
            'eravamo', 'eravate', 'erano', 'sarà', 'sarò', 'sarai', 'saremo', 'sarete', 'saranno', 'sia',
            'siate', 'siano', 'fosse', 'fossi', 'fossimo', 'foste', 'fossero', 'ho', 'hai', 'ha', 'abbiamo',
            'avete', 'hanno', 'aveva', 'avevo', 'avevi', 'avevamo', 'avevate', 'avevano', 'avrà', 'avrò',
            'avrai', 'avremo', 'avrete', 'avranno', 'abbia', 'abbiate', 'abbiano', 'avesse', 'avessi',
            'avessimo', 'aveste', 'avessero', 'faccio', 'fai', 'fa', 'facciamo', 'fate', 'fanno', 'faceva',
            'facevo', 'facevi', 'facevamo', 'facevate', 'facevano', 'farà', 'farò', 'farai', 'faremo',
            'farete', 'faranno', 'faccia', 'facciate', 'facciano', 'facesse', 'facessi', 'facessimo',
            'faceste', 'facessero', 'vado', 'vai', 'va', 'andiamo', 'andate', 'vanno', 'andava', 'andavo',
            'andavi', 'andavamo', 'andavate', 'andavano', 'andrà', 'andrò', 'andrai', 'andremo', 'andrete',
            'andranno', 'vada', 'vadano', 'andasse', 'andassi', 'andassimo', 'andaste', 'andassero',
            'per', 'con', 'su', 'di', 'nel', 'alla', 'dal', 'delle'
        }
        
        self.english_stopwords = {
            'the', 'be', 'to', 'of', 'and', 'a', 'in', 'that', 'have', 'i', 'it', 'for', 'not', 'on',
            'with', 'he', 'as', 'you', 'do', 'at', 'this', 'but', 'his', 'by', 'from', 'they', 'we',
            'say', 'her', 'she', 'or', 'an', 'will', 'my', 'one', 'all', 'would', 'there', 'their',
            'what', 'so', 'up', 'out', 'if', 'about', 'who', 'get', 'which', 'go', 'me', 'when',
            'make', 'can', 'like', 'time', 'no', 'just', 'him', 'know', 'take', 'people', 'into',
            'year', 'your', 'good', 'some', 'could', 'them', 'see', 'other', 'than', 'then', 'now',
            'look', 'only', 'come', 'its', 'over', 'think', 'also', 'back', 'after', 'use', 'two',
            'how', 'our', 'work', 'first', 'well', 'way', 'even', 'new', 'want', 'because', 'any',
            'these', 'give', 'day', 'most', 'us', 'is', 'are', 'was', 'were', 'been', 'being',
            'has', 'had', 'having', 'does', 'did', 'doing', 'will', 'would', 'should', 'could',
            'may', 'might', 'must', 'shall', 'can', 'am', 'is', 'are', 'was', 'were', 'be', 'been',
            'being', 'have', 'has', 'had', 'having', 'do', 'does', 'did', 'doing', 'will', 'would',
            'should', 'could', 'may', 'might', 'must', 'shall', 'can'
        }

    def clean_text(self, text: str) -> str:
        """Clean text by removing special characters and normalizing"""
        # Remove HTML tags
        text = re.sub(r'<[^>]+>', '', text)
        # Remove special characters but keep accented letters
        text = re.sub(r'[^\w\s\u00C0-\u017F]', ' ', text)
        # Replace multiple spaces with single space
        text = re.sub(r'\s+', ' ', text)
        return text.strip()

    def extract_keywords(self, text: str, location: str):
        """Extract keywords from text and categorize by language"""
        cleaned_text = self.clean_text(text.lower())
        words = cleaned_text.split()
        
        for word in words:
            if len(word) < 3:  # Skip very short words
                continue
                
            # Skip pure numbers
            if word.isdigit():
                continue
                
            # Check if word contains Italian characteristics
            is_italian = self.is_likely_italian(word)
            
            if is_italian and word not in self.italian_stopwords:
                self.italian_keywords[word] += 1
                self.keyword_locations[f"italian_{word}"].append(location)
            elif not is_italian and word not in self.english_stopwords:
                self.english_keywords[word] += 1
                self.keyword_locations[f"english_{word}"].append(location)

    def is_likely_italian(self, word: str) -> bool:
        """Determine if a word is likely Italian based on characteristics"""
        # Known Italian endings
        italian_endings = ['zione', 'tura', 'zione', 'ario', 'eria', 'aggio', 'ezza', 'ismo', 'ista', 'ante', 'ente', 'oso', 'osa', 'ico', 'ica']
        
        # Known Italian words that should be classified as Italian
        italian_words = {
            'auto', 'restauro', 'epoca', 'classiche', 'ferrari', 'alfa', 'romeo', 'fiat', 'rizza', 'classic',
            'roma', 'officina', 'carrozzeria', 'meccanica', 'tapezzeria', 'servizi', 'anni', 'esperienza',
            'completati', 'specializzati', 'storiche', 'preventivo', 'contatti', 'indirizzo', 'telefono',
            'email', 'restauri', 'progetti', 'soddisfazione', 'clienti', 'portfolio', 'prenestina',
            'cabriolet', 'coupe', 'touring', 'ghia', 'pininfarina', 'vignale', 'scaglietti', 'lancia',
            'aurelia', 'cisitalia', 'chrysler', 'daytona', 'specialista', 'specialisti', 'conservativo',
            'professionale', 'artigianalità', 'dettagli', 'motore', 'carrozzeria', 'produzione', 'unità'
        }
        
        # Known English words
        english_words = {
            'classic', 'car', 'cars', 'restoration', 'vintage', 'service', 'workshop', 'mechanical',
            'bodywork', 'upholstery', 'consulting', 'years', 'experience', 'completed', 'satisfaction',
            'clients', 'portfolio', 'address', 'phone', 'email', 'projects', 'details', 'engine',
            'production', 'units', 'begin', 'your', 'journey', 'craftsmanship', 'professional',
            'about', 'services', 'contact', 'contacts', 'restorations', 'view', 'more', 'project',
            'start', 'back', 'homepage', 'message', 'sent', 'thank', 'home', 'page', 'terms',
            'conditions', 'privacy', 'policy', 'opening', 'hours', 'monday', 'friday', 'sunday'
        }
        
        if word in italian_words:
            return True
        if word in english_words:
            return False
            
        # Check for Italian endings
        for ending in italian_endings:
            if word.endswith(ending):
                return True
        
        # Italian typically has more vowels and certain letter combinations
        vowel_count = sum(1 for char in word if char in 'aeiou')
        if len(word) > 0 and vowel_count / len(word) > 0.4:
            return True
            
        # Common Italian letter combinations
        italian_patterns = ['zione', 'glia', 'glio', 'cci', 'cchi', 'ggi', 'ggh']
        for pattern in italian_patterns:
            if pattern in word:
                return True
        
        return False

    def analyze_html_file(self, file_path: str, file_name: str):
        """Analyze HTML file content"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract meta tags content
            meta_patterns = [
                r'<title[^>]*>([^<]+)</title>',
                r'<meta[^>]*name=["\']description["\'][^>]*content=["\']([^"\']+)["\']',
                r'<meta[^>]*name=["\']keywords["\'][^>]*content=["\']([^"\']+)["\']',
                r'<meta[^>]*property=["\']og:title["\'][^>]*content=["\']([^"\']+)["\']',
                r'<meta[^>]*property=["\']og:description["\'][^>]*content=["\']([^"\']+)["\']',
            ]
            
            for pattern in meta_patterns:
                matches = re.findall(pattern, content, re.IGNORECASE)
                for match in matches:
                    self.extract_keywords(match, f"{file_name} - Meta tags")
            
            # Extract text content from specific sections
            # Remove script and style tags first
            content = re.sub(r'<script[^>]*>.*?</script>', '', content, flags=re.DOTALL)
            content = re.sub(r'<style[^>]*>.*?</style>', '', content, flags=re.DOTALL)
            
            # Extract headings
            heading_patterns = [r'<h[1-6][^>]*>([^<]+)</h[1-6]>']
            for pattern in heading_patterns:
                matches = re.findall(pattern, content, re.IGNORECASE)
                for match in matches:
                    self.extract_keywords(match, f"{file_name} - Headings")
            
            # Extract paragraph content
            p_matches = re.findall(r'<p[^>]*>([^<]+)</p>', content, re.IGNORECASE)
            for match in p_matches:
                self.extract_keywords(match, f"{file_name} - Paragraphs")
            
            # Extract alt text from images
            alt_matches = re.findall(r'<img[^>]*alt=["\']([^"\']+)["\']', content, re.IGNORECASE)
            for match in alt_matches:
                self.extract_keywords(match, f"{file_name} - Alt text")
            
            # Extract data-translate attributes (translation keys)
            translate_matches = re.findall(r'data-translate=["\']([^"\']+)["\']', content, re.IGNORECASE)
            for match in translate_matches:
                self.extract_keywords(match, f"{file_name} - Translation keys")
            
            # Extract button and link text
            button_matches = re.findall(r'<(?:button|a)[^>]*>([^<]+)</(?:button|a)>', content, re.IGNORECASE)
            for match in button_matches:
                clean_match = re.sub(r'<[^>]+>', '', match)  # Remove any nested tags
                if clean_match.strip():
                    self.extract_keywords(clean_match, f"{file_name} - Buttons/Links")
            
        except Exception as e:
            print(f"Error analyzing {file_path}: {e}")

    def analyze_js_file(self, file_path: str, file_name: str):
        """Analyze JavaScript file for translations and text content"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                content = f.read()
            
            # Extract translation strings
            translation_pattern = r"['\"]([^'\"]{3,})['\"]"
            matches = re.findall(translation_pattern, content)
            
            for match in matches:
                # Skip code-like strings
                if any(char in match for char in ['(', ')', '{', '}', ';', '=', '<', '>']):
                    continue
                    
                self.extract_keywords(match, f"{file_name} - Translations")
                
        except Exception as e:
            print(f"Error analyzing {file_path}: {e}")

    def analyze_json_file(self, file_path: str, file_name: str):
        """Analyze JSON file for project data"""
        try:
            with open(file_path, 'r', encoding='utf-8') as f:
                data = json.load(f)
            
            def extract_from_dict(obj, path=""):
                if isinstance(obj, dict):
                    for key, value in obj.items():
                        new_path = f"{path}.{key}" if path else key
                        extract_from_dict(value, new_path)
                elif isinstance(obj, list):
                    for i, item in enumerate(obj):
                        extract_from_dict(item, f"{path}[{i}]")
                elif isinstance(obj, str):
                    self.extract_keywords(obj, f"{file_name} - {path}")
            
            extract_from_dict(data)
                
        except Exception as e:
            print(f"Error analyzing {file_path}: {e}")

    def get_top_keywords(self, n: int = 10) -> Tuple[List[Tuple[str, int]], List[Tuple[str, int]]]:
        """Get top N keywords for both languages"""
        italian_top = self.italian_keywords.most_common(n)
        english_top = self.english_keywords.most_common(n)
        return italian_top, english_top

    def print_analysis(self):
        """Print the keyword analysis results"""
        italian_top, english_top = self.get_top_keywords(10)
        
        print("="*80)
        print("KEYWORD FREQUENCY ANALYSIS - RIZZA CLASSIC WEBSITE")
        print("="*80)
        
        print("\n🇮🇹 TOP 10 ITALIAN KEYWORDS:")
        print("-" * 40)
        for i, (keyword, count) in enumerate(italian_top, 1):
            locations = set(self.keyword_locations[f"italian_{keyword}"])
            print(f"{i:2}. {keyword:<20} ({count:3} occurrences)")
            print(f"    Found in: {', '.join(sorted(locations)[:3])}")
            if len(locations) > 3:
                print(f"    ... and {len(locations) - 3} more locations")
            print()
        
        print("\n🇬🇧 TOP 10 ENGLISH KEYWORDS:")
        print("-" * 40)
        for i, (keyword, count) in enumerate(english_top, 1):
            locations = set(self.keyword_locations[f"english_{keyword}"])
            print(f"{i:2}. {keyword:<20} ({count:3} occurrences)")
            print(f"    Found in: {', '.join(sorted(locations)[:3])}")
            if len(locations) > 3:
                print(f"    ... and {len(locations) - 3} more locations")
            print()
        
        print(f"\nTOTAL UNIQUE ITALIAN KEYWORDS: {len(self.italian_keywords)}")
        print(f"TOTAL UNIQUE ENGLISH KEYWORDS: {len(self.english_keywords)}")
        print(f"TOTAL ITALIAN KEYWORD OCCURRENCES: {sum(self.italian_keywords.values())}")
        print(f"TOTAL ENGLISH KEYWORD OCCURRENCES: {sum(self.english_keywords.values())}")

def main():
    analyzer = KeywordAnalyzer()
    
    # File paths to analyze
    files_to_analyze = [
        ('/Users/bobernagadamian/Desktop/RizzaClassic/index.html', 'index.html'),
        ('/Users/bobernagadamian/Desktop/RizzaClassic/contact.html', 'contact.html'),
        ('/Users/bobernagadamian/Desktop/RizzaClassic/restorations.html', 'restorations.html'),
        ('/Users/bobernagadamian/Desktop/RizzaClassic/project.html', 'project.html'),
        ('/Users/bobernagadamian/Desktop/RizzaClassic/thanks.html', 'thanks.html'),
        ('/Users/bobernagadamian/Desktop/RizzaClassic/main.js', 'main.js'),
        ('/Users/bobernagadamian/Desktop/RizzaClassic/projects.json', 'projects.json'),
    ]
    
    # Analyze each file
    for file_path, file_name in files_to_analyze:
        print(f"Analyzing {file_name}...")
        
        if file_name.endswith('.html'):
            analyzer.analyze_html_file(file_path, file_name)
        elif file_name.endswith('.js'):
            analyzer.analyze_js_file(file_path, file_name)
        elif file_name.endswith('.json'):
            analyzer.analyze_json_file(file_path, file_name)
    
    # Print results
    analyzer.print_analysis()

if __name__ == "__main__":
    main()