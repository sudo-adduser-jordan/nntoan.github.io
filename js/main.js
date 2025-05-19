// Light Foreground Colors
const LIGHT_BLACK = "\x1b[30;1m"; // Bright Black (Gray)
const LIGHT_RED = "\x1b[31;1m";   // Light Red
const LIGHT_GREEN = "\x1b[32;1m"; // Light Green
const LIGHT_YELLOW = "\x1b[33;1m";// Light Yellow
const LIGHT_BLUE = "\x1b[34;1m"; // Light Blue
const LIGHT_MAGENTA = "\x1b[35;1m"; // Light Magenta
const LIGHT_CYAN = "\x1b[36;1m"; // Light Cyan
const LIGHT_WHITE = "\x1b[37;1m"; // Light White (Bright White)

// Light Background Colors
const BG_LIGHT_BLACK = "\x1b[40;1m"; // Bright Black Background
const BG_LIGHT_RED = "\x1b[41;1m";   // Light Red Background
const BG_LIGHT_GREEN = "\x1b[42;1m"; // Light Green Background
const BG_LIGHT_YELLOW = "\x1b[43;1m"; // Light Yellow Background
const BG_LIGHT_BLUE = "\x1b[44;1m"; // Light Blue Background
const BG_LIGHT_MAGENTA = "\x1b[45;1m"; // Light Magenta Background
const BG_LIGHT_CYAN = "\x1b[46;1m"; // Light Cyan Background
const BG_LIGHT_WHITE = "\x1b[47;1m"; // Light White Background

// Foreground Colors
const BLACK = "\x1b[30m";
const RED = "\x1b[31m";
const GREEN = "\x1b[32m";
const YELLOW = "\x1b[33m";
const BLUE = "\x1b[34m";
const MAGENTA = "\x1b[35m";
const CYAN = "\x1b[36m";
const WHITE = "\x1b[37m";

// Background Colors
const BG_BLACK = "\x1b[40m";
const BG_RED = "\x1b[41m";
const BG_GREEN = "\x1b[42m";
const BG_YELLOW = "\x1b[43m";
const BG_BLUE = "\x1b[44m";
const BG_MAGENTA = "\x1b[45m";
const BG_CYAN = "\x1b[46m";
const BG_WHITE = "\x1b[47m";

// Formatting Options
const BOLD = "\x1b[1m";
const UNDERLINE = "\x1b[4m";
const RESET = "\x1b[0m";

var commandText = function (text) {
    return '[[g;#EEEEEE;]' + text + ']'
};

var titleText = `
    ##################################################################################################################
    |                                                                                                                |
    |${LIGHT_GREEN}         ,.,                            ${LIGHT_CYAN}                                                                   ${RESET} |
    |${LIGHT_GREEN}        MMMM_    ,..,                   ${LIGHT_CYAN}                                                                   ${RESET} |
    |${LIGHT_GREEN}          "_ "__"MMMMM          ,...,,  ${LIGHT_CYAN}                                     $$\\                          ${RESET}  |
    |${LIGHT_GREEN}   ,..., __." --"    ,.,     _-"MMMMMMM ${LIGHT_CYAN}                                     $$ |                          ${RESET} |
    |${LIGHT_GREEN}  MMMMMM"___ "_._   MMM"_."" _ """"""   ${LIGHT_CYAN}       $$\\  $$$$$$\\   $$$$$$\\   $$$$$$$ | $$$$$$\\  $$$$$$$\\   ${RESET}      |
    |${LIGHT_GREEN}   """""    "" ,\\_.   "_. ."           ${LIGHT_CYAN}        \\__|$$  __$$\\ $$  __$$\\ $$  __$$ | \\____$$\\ $$  __$$\\ ${RESET}       |
    |${LIGHT_GREEN}          ,., _"__\\__./ ."             ${LIGHT_CYAN}        $$\\ $$ /  $$ |$$ |  \\__|$$ /  $$ | $$$$$$$ |$$ |  $$ |    ${RESET}   |
    |${LIGHT_GREEN}         MMMMM_"  "_    ./              ${LIGHT_CYAN}       $$ |$$ |  $$ |$$ |      $$ |  $$ |$$  __$$ |$$ |  $$ |      ${RESET} |
    |${LIGHT_GREEN}          ''''      (    )              ${LIGHT_CYAN}       $$ |\\$$$$$$  |$$ |      \\$$$$$$$ |\\$$$$$$$ |$$ |  $$ |   ${RESET}    |
    |${RESET}   ._______________.-'____"---._.       ${LIGHT_CYAN}        $$ | \\______/ \\__|       \\_______| \\_______|\\__|  \\__|  ${RESET}      |
    |${RESET}    \\                          /       ${LIGHT_CYAN}   $$\\   $$ |                                                         ${RESET} |
    |${RESET}     \\________________________/        ${LIGHT_CYAN}   \\$$$$$$  |                                                         ${RESET} |
    |${RESET}     (_)                    (_)         ${LIGHT_CYAN}   \\______/                                                          ${RESET} |
    |                                                                                                                |
    |                                                                                                                |
    |    "A byte of time is a byte of gold, but you can't buy that byte of time, with a byte of gold.”               |
    |                                                                                                                |
    |    Please type ${commandText(`menu`)} for a list of commands.                                                                    |
    |                                                                                                                |
    ##################################################################################################################
`

var messageText = `
    ##################################################################################################################
    |                                                                                                                |
    |    "A byte of time is a byte of gold, but you can't buy that byte of time, with a byte of gold.”               |
    |                                                                                                                |
    |    Please type ${commandText(`menu`)} for a list of commands.                                                                    |
    |                                                                                                                |
    ##################################################################################################################
` 

var App = {
    allSection: false,
    menu: function () {
        this.echo();
        this.echo('\t\t|  ' + commandText('motd') + '               - Display Message of the Day');
        this.echo();
        this.echo('\t\t|  ' + commandText('about') + '              - Summary of me');
        this.echo('\t\t|  ' + commandText('fastfetch') + '          - Get my dev environment value');
        this.echo('\t\t|  ' + commandText('projects') + '           - Recent projects of mine');
        this.echo('\t\t|  ' + commandText('skills') + '             - What I can do');
        this.echo();
        this.echo('\t\t|  ' + commandText('github') + '             - Das github');
        this.echo('\t\t|  ' + commandText('linkedin') + '           - How I connect for work things');
        this.echo();
        this.echo('\t\t|  ' + commandText('contact') + '            - Contact me');
        this.echo('\t\t|  ' + commandText('credits') + '            - Credits for this website');
        this.echo();
        this.echo('\t\t|  ' + commandText('clear') + '              - Clear screen');
        this.echo('\t\t|  ' + commandText('all') + '                - Run all commands');
        this.echo();
    },
    motd: function (firstLoad) {
        if (typeof firstLoad === 'undefined') firstLoad = false;
        if (!firstLoad) this.echo("\n" + messageText);
        if (firstLoad) return titleText;
    },
    about: function () { // maybe combine with fastfetch
        this.echo();
        this.echo('\t\t|  Name:         ' + commandText('Jordan'));
        this.echo();
        this.echo('\t\t|  Location:     ' + commandText('United States, Remote'));
        this.echo();
        this.echo('\t\t|  Vocation:     '+commandText('Software Developer'));
        this.echo('\t\t|                Experienced in multiple languages, tools, and environments');
        this.echo('\t\t|                Use ' + commandText('fastfetch') + ' to see the tools I use for work.');
        this.echo();
        this.echo('\t\t|  Employment:   I am currently seeking a ' + commandText('Remote') + ' position.');
        this.echo('\t\t|                Get in touch if you\'d like more information sudo.sendmail.jordan@gmail.com');
        this.echo();
    },
    fastfetch: function () {
        this.echo(`
        |       
        |            -/oyddmdhs+:.                 user1@computer1
        |        -odNMMMMMMMMNNmhy+-'              ---------------
        |      -yNMMMMMMMMMMMNNNmmdhy+-            OS: Gentoo Linux x86_64
        |    'omMMMMMMMMMMMMNmdmmmmddhhy/'         Kernel: Linux 6.12.25-gentoo-dist
        |    omMMMMMMMMMMMNhhyyyohmdddhhhdo'       Packages: 950 (emerge), 7 (flatpak)
        |   .ydMMMMMMMMMMdhs++so/smdddhhhhdm+'     Shell: zsh 5.9
        |    oyhdmNMMMMMMMNdyooydmddddhhhhyhNd.    DE: Xfce4 4.20
        |     :oyhhdNNMMMMMMMNNNmmdddhhhhhyymMh    WM: Xfwm4 (X11)
        |       .:+sydNMMMMMNNNmmmdddhhhhhhmMmy    Theme: Adwaita [GTK3]
        |          /mMMMMMMNNNmmmdddhhhhhmMNhs:    Icons: win10x
        |       'oNMMMMMMMNNNmmmddddhhdmMNhs+'     Cursor: Adwaita
        |     'sNMMMMMMMMNNNmmmdddddmNMmhs/.       Terminal: xfce4-terminal 1.1.5
        |    /NMMMMMMMMNNNNmmmdddmNMNdso:'         Terminal Font: NerdFont NF 
        |   +MMMMMMMNNNNNmmmmdmNMNdso/-            
        |   yMMNNNNNNNmmmmmNNMmhs+/-'              
        |   /hMMNNNNNNNNMNdhs++/-'                 
        |   '/ohdmmddhys+++/:.'                    
        |     '-//////:--.                         
        |       `);
        this.echo();
    },
    projects: function () {
        this.echo();
        this.echo('\t\t|  ' + commandText('Code Racer') + '\t\t\t\t\t\t\t' + 'https://github.com/cody/code-racer');
        this.echo('\t\t|  ' + commandText('Linux Themes') + '\t\t\t\t\t\t  ' + 'https://github.com/linuxthemes');
        this.echo('\t\t|  ' + commandText('Runelite Plugin') + '\t\t\t\t\t   ' + 'https://github.com/runelite');
        this.echo('\t\t|  ' + commandText('Bottles: Eve Online Launcher') + '\t\t  ' + 'https://github.com/ohmybash/oh-my-bash');
        this.echo();
    },
    skills: function () {
        this.echo();
        this.echo('\t\t>  ' + commandText('Languages'));
        this.echo();
        this.echo('\t\t  \ue61d  | ' + 'Javascript');
        this.echo('\t\t  \ue738  | ' + 'Java');
        this.echo('\t\t  \ue73c  | ' + 'Python');
        this.echo('\t\t  \udb81\udfd3  | ' + 'Go');
        this.echo('\t\t  \udb81\ude72  | ' + 'C++');
        this.echo('\t\t  \ue61e  | ' + 'C');
        this.echo('\t\t  \ue760  | ' + 'Bash');
        this.echo();
        this.echo('\t\t>  ' + commandText('Frameworks'));
        this.echo();
        this.echo('\t\t  \ue7ba  | ' + 'React');
        this.echo('\t\t  \ue8ac  | ' + 'Spring');
        this.echo('\t\t  \udb81\udebf  | ' + 'Angular');
        this.echo();
        this.echo('\t\t>  ' + commandText('Platforms'));
        this.echo();
        this.echo('\t\t  \ue7e6  | ' + 'Linux');
        this.echo('\t\t  \ue70f  | ' + 'Windows');
        this.echo('\t\t  \uf21f  | ' + 'Docker');
        this.echo('\t\t  \uebaa  | ' + 'Cloud');
        this.echo();
        this.echo('\t\t>  ' + commandText('Tools'));
        this.echo();
        this.echo('\t\t  \ue8da  | ' + 'VSCode');
        this.echo('\t\t  \ue745  | ' + 'Librewolf');
        this.echo('\t\t  \uf092  | ' + 'GitHub Desktop');
        this.echo();
    },
    certifications: function () {
        this.echo();
        this.echo('\t\t|  ' + commandText('Java Developer') + '\t\t\t\t' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t\t|  ' + commandText('Java Backend Developer') + '\t\t' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t\t|  ' + commandText('Java Desktop Developer') + '\t\t' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t\t|  ' + commandText('Java Spring Security ') + '\t\t ' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t\t|  ' + commandText('Python Developer') + '\t\t\t  ' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t\t|  ' + commandText('Go Developer') + '\t\t\t\t  ' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t\t|  ' + commandText('Front End Developer') + '\t\t   ' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t\t|  ' + commandText('Javascript Developer') + '\t\t  ' + 'https://github.com/sudo-adduser-jordan');
        this.echo('\t\t|  ' + commandText('Linux Certified') + '\t\t\t   ' + 'https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    github: function () {
        this.echo();
        this.echo('\t\t|  https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    linkedin: function () {
        this.echo();
        this.echo('\t\t|  https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    contact: function () {
        this.echo();
        this.echo('\t\t|  ' + commandText('Phone') + ':         420.420.6969');
        this.echo('\t\t|  ' + commandText('Email') + ':         sudo.sendmail.jordan@gmail.com');
        this.echo('\t\t|  ' + commandText('LinkedIn') + ':      https://github.com/sudo-adduser-jordan');
        this.echo();
    },
    credits: function () {
        this.echo();
        this.echo('\t\t|  Forked and refactored from: https://github.com/');
        this.echo('\t\t|  Using ' + commandText('Jquery Terminal Emulator') + ' by ' + commandText('Jakub Jankiewicz') + ': http://terminal.jcubic.pl');
        this.echo();
    },
    all: function () {
        App.allSection = true;
        this.clear();
        this.exec('motd');
        this.exec('about');
        this.exec('fastfetch');
        this.exec('projects');
        this.exec('skills');
        this.exec('certifications');
        this.exec('contact');
        this.exec('github');
        this.exec('linkedin');
        this.exec('credits');
        App.allSection = false;
    }
};
jQuery(document).ready(function ($) {
    // if on mobile forward to
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        window.location.href = 'https:github.com/sudo-adduser-jordan';
    } else { 
        $('body').terminal(App, {
            completion: true,
            checkArity: false,
            greetings: function (cb) { 
                cb(App.motd(true)) 
            },
            onBlur: function () { 
                return false 
            },
            onClear: function(terminal) {
                if (App.allSection !== true) terminal.echo(App.motd(true));
            },
        })
    }
});
