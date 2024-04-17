import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import { Container } from './styles'

import { BsHousesFill } from 'react-icons/bs'
import { LiaLaptopCodeSolid } from 'react-icons/lia'
import { IoPeople } from 'react-icons/io5'
import { TbMenu2, TbMenuDeep } from 'react-icons/tb'

import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa6'
import { MdOutlineEmail } from 'react-icons/md'

export function Sidebar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [icone, setIcone] = useState(<TbMenu2 />)

  // função para trocar os icones
  function handleToggleMenu() {
    setMenuOpen(!menuOpen)
    setIcone(icone.type === TbMenu2 ? <TbMenuDeep /> : <TbMenu2 />)
  }

  return (
    <Container isMenuOpen={menuOpen}>
      <button type='button' onClick={handleToggleMenu}>
        {icone.type === TbMenu2 ? (
          <TbMenu2 className='icone1' />
        ) : (
          <TbMenuDeep className='icone2' />
        )}
      </button>
      <nav>
        <ul>
          <li>
            <NavLink to='/'>
              <BsHousesFill />
              <span>Início</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='projetos'>
              <LiaLaptopCodeSolid />
              <span>Projetos</span>
            </NavLink>
          </li>

          <li>
            <NavLink to='sobre'>
              <IoPeople />
              <span>Sobre</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      <div className='icones'>
        <NavLink to='https://www.instagram.com/konrath_alexandre/'>
          <FaInstagram />
        </NavLink>
        <NavLink to='mailto:delimakonrath@gmail.com'>
          <MdOutlineEmail />
        </NavLink>
        <NavLink to='https://www.linkedin.com/in/alexandre-konrath-5a0692267/'>
          <FaLinkedinIn />
        </NavLink>
        <NavLink to='https://github.com/Alexandre-Konrath'>
          <FaGithub />
        </NavLink>
      </div>
    </Container>
  )
}
